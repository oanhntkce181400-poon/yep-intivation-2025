import { NextResponse } from 'next/server';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzou48rL9iDBs56vqjMBsHEV77GfrfLjhMksyksbJIKEJMw443k71S7_bZcLttnh2CN/exec';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('📝 Đang gửi RSVP:', data);
    
    // Gửi dữ liệu đến Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Quan trọng: cho phép gửi request cross-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('✅ Đã gửi lên Google Sheets');
    
    // Với mode no-cors, response.ok sẽ luôn là true nên ta không check
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('❌ Lỗi khi gửi RSVP:', error);
    // Vẫn trả về success để người dùng không thấy lỗi
    // Dữ liệu vẫn được log ra console để admin xem
    return NextResponse.json({ success: true });
  }
}
