# BẢO MẬT WEBSITE - HƯỚNG DẪN CHO DEV

## ✅ ĐÃ THỰC HIỆN

### 1. **Environment Variables**
- Google Apps Script URL được lưu trong `.env.local` (không commit lên Git)
- File `.env.example` làm mẫu cho các dev khác
- Production: Cần set biến `GOOGLE_SCRIPT_URL` trên Vercel

### 2. **API Route Protection**
- Tạo `/api/submit-rsvp` để proxy request
- Google Script URL **CHỈ** tồn tại ở server, **KHÔNG** lộ ra client
- Client chỉ gọi `/api/submit-rsvp`, không biết URL thật

### 3. **Rate Limiting**
- Giới hạn: Tối đa 5 lần submit trong 60 giây mỗi IP
- Ngăn chặn spam và abuse
- Trả về HTTP 429 khi vượt giới hạn

### 4. **Input Validation & Sanitization**
- Kiểm tra tất cả field bắt buộc (name, attendance)
- Giới hạn độ dài input (name: 100 ký tự, message: 500 ký tự)
- Sanitize để ngăn chặn XSS và injection attacks
- Kiểm tra giá trị hợp lệ (attendance chỉ nhận "Có", "Không", "Chưa chắc")

### 5. **Error Handling**
- Không lộ thông tin lỗi chi tiết ra client
- Log lỗi ở server để admin kiểm tra
- Thông báo lỗi thân thiện với người dùng

## 🔒 LỢI ÍCH BẢO MẬT

1. **Google Script URL bị ẩn**: Dev khác xem DevTools không thấy URL thật
2. **Rate Limiting**: Ngăn spam, abuse, và DoS attacks
3. **Validation**: Chỉ nhận dữ liệu hợp lệ, ngăn injection
4. **Server-side Processing**: Kiểm soát logic quan trọng ở server

## ⚙️ HƯỚNG DẪN DEPLOY VERCEL

1. Push code lên Git (`.env.local` sẽ **KHÔNG** được push)
2. Vào Vercel Dashboard → Settings → Environment Variables
3. Thêm biến: `GOOGLE_SCRIPT_URL` = `your_google_script_url`
4. Deploy lại website

## ⚠️ LƯU Ý

- File `.env.local` **KHÔNG BAO GIỜ** commit lên Git
- Mỗi dev cần tự tạo `.env.local` từ `.env.example`
- Production cần set environment variable trên Vercel
- Code trong DevTools vẫn xem được (Next.js sẽ minify ở production)
- Điều quan trọng là **logic nhạy cảm** (API URL, keys) ở server, không lộ ra client

## 📋 CHECKLIST TRƯỚC KHI COMMIT

- [ ] File `.env.local` **KHÔNG** có trong git status
- [ ] File `.env.example` đã được commit
- [ ] Code không có hardcode API keys, URLs
- [ ] Đã test form submit hoạt động bình thường
