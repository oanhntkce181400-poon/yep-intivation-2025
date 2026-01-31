import { NextResponse } from 'next/server';

// Lấy URL từ environment variable - KHÔNG LỘ RA CLIENT
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

// Rate limiting: lưu IP và thời gian submit
const submissionTracker = new Map<string, number[]>();
const MAX_SUBMISSIONS = 5; // Tối đa 5 lần
const TIME_WINDOW = 60 * 1000; // Trong 60 giây

export async function POST(request: Request) {
  try {
    // Kiểm tra có Google Script URL không
    if (!GOOGLE_SCRIPT_URL) {
      console.error('⚠️ GOOGLE_SCRIPT_URL không được cấu hình');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Lấy IP để rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    // Kiểm tra rate limiting
    const submissions = submissionTracker.get(ip) || [];
    const recentSubmissions = submissions.filter(time => now - time < TIME_WINDOW);
    
    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      console.warn(`⚠️ Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' }, 
        { status: 429 }
      );
    }
    
    // Lấy và validate dữ liệu
    const data = await request.json();
    
    // Validation cơ bản
    if (!data.name || data.name.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }
    
    if (!data.attendance || !['Có', 'Không', 'Chưa chắc'].includes(data.attendance)) {
      return NextResponse.json({ success: false, error: 'Invalid attendance value' }, { status: 400 });
    }
    
    // Sanitize input - loại bỏ ký tự nguy hiểm
    const sanitizedData = {
      name: String(data.name).substring(0, 100).trim(),
      attendance: String(data.attendance).substring(0, 20),
      guests: String(data.guests || '').substring(0, 20),
      unit: String(data.unit || '').substring(0, 100),
      message: String(data.message || '').substring(0, 500).trim(),
      timestamp: new Date().toLocaleString('vi-VN'),
    };
    
    console.log('📝 Đang gửi RSVP:', sanitizedData);
    
    // Gửi dữ liệu đến Google Apps Script
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    // Cập nhật rate limiting tracker
    recentSubmissions.push(now);
    submissionTracker.set(ip, recentSubmissions);
    
    console.log('✅ Đã gửi lên Google Sheets');
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('❌ Lỗi khi gửi RSVP:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
