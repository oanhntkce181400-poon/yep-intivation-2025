# 🎉 Year End Party 2026 - Wedding Invitation Website

Website thiệp mời trực tuyến cho **Year End Party 2026** dành cho cộng đồng **FPT Software**, **FPTU**, **Lớp Tiếng Nhật** và **BrSE**.

## ✨ Tính Năng Chính

### 1. 🎨 Giao Diện Đẹp Mắt
- Thiết kế responsive hoàn hảo trên cả Desktop và Mobile
- Animation mượt mà, chuyên nghiệp
- Màu sắc trang nhã, phong cách hiện đại

### 2. ⏰ Countdown Timer
- Đếm ngược thời gian đến sự kiện
- Hiển thị theo thời gian thực: Ngày - Giờ - Phút - Giây
- Tự động cập nhật mỗi giây

### 3. 📝 Form Đăng Ký RSVP
Thu thập thông tin chi tiết:
- Họ và tên
- Lời nhắn gửi Ban Tổ Chức  
- Xác nhận tham dự (Có/Không/Chưa chắc)
- Số người đi cùng (1/2/3/4+ người)
- Đơn vị: FPT Software, FPTU - Lớp Tiếng Nhật, FPTU - Lớp BrSE, FPT Education, Khác

### 4. 📊 Export Dữ Liệu Ra Excel
**Tính năng đặc biệt:**
- ✅ Tự động xuất file Excel khi có người đăng ký
- ✅ Lưu trữ tất cả dữ liệu trong localStorage
- ✅ File Excel có tên: `YEP_2026_DangKy_YYYY-MM-DD.xlsx`
- ✅ Bao gồm: Họ tên, Tham dự, Số người, Đơn vị, Lời nhắn, Thời gian

### 5. 📍 Google Maps
- Nhúng bản đồ FPT Tower
- Nút "Mở trong Google Maps" để dẫn đường
- Hiển thị địa chỉ chi tiết

### 6. 📈 Thống Kê Đăng Ký
- Tổng số người đăng ký
- Số người xác nhận tham dự
- Số người chưa chắc chắn
- Tự động cập nhật mỗi 5 giây

### 7. 🎯 Thông Tin Dress Code
- Smart Casual
- Comfortable & Stylish
- Party Vibes

### 8. 📱 Chia Sẻ Lên Facebook
- Nút chia sẻ nhanh lên Facebook
- Tự động điền nội dung chia sẻ

## 🚀 Hướng Dẫn Cài Đặt

### Yêu cầu:
- Node.js 18+ 
- npm hoặc yarn

### Các bước:

```bash
# 1. Clone repository
git clone <repository-url>

# 2. Di chuyển vào thư mục dự án
cd yep-invitation

# 3. Cài đặt dependencies
npm install

# 4. Chạy development server
npm run dev

# 5. Mở trình duyệt tại
http://localhost:3000
```

## 📦 Công Nghệ Sử Dụng

- **Next.js 15** - React Framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **XLSX** - Thư viện export Excel
- **React Hooks** - useState, useEffect cho state management

## 🎨 Tùy Chỉnh

### Thay đổi thời gian sự kiện:
File: `app/page.tsx`
```tsx
<Countdown targetDate="2026-12-31T18:00:00" />
```

### Thay đổi địa điểm:
File: `app/page.tsx` - Tìm section "Location Card"
- Cập nhật tên địa điểm
- Địa chỉ
- Link Google Maps

### Thay đổi danh sách đơn vị:
File: `app/components/RSVPForm.tsx` - Tìm select `dietary`

## 📊 Quản Lý Dữ Liệu

### Xem dữ liệu đã lưu:
```javascript
// Mở Console (F12) và gõ:
JSON.parse(localStorage.getItem('yep_registrations'))
```

### Xóa tất cả dữ liệu:
```javascript
localStorage.removeItem('yep_registrations')
```

### Download lại file Excel:
- Dữ liệu được tự động download mỗi lần có người submit form
- File chứa tất cả các lần đăng ký từ trước đến nay

## 📱 Responsive Design

Website được tối ưu cho:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🎯 Checklist Deploy

- [ ] Cập nhật thời gian sự kiện chính xác
- [ ] Cập nhật địa điểm và Google Maps link
- [ ] Test responsive trên nhiều thiết bị
- [ ] Test chức năng download Excel
- [ ] Test form validation
- [ ] Kiểm tra tốc độ tải trang
- [ ] Cấu hình domain và hosting

## 📝 Build & Deploy

```bash
# Build production
npm run build

# Start production server
npm start

# hoặc deploy lên Vercel (khuyến nghị)
vercel deploy
```

## 🔧 Troubleshooting

### Excel không tải xuống:
- Kiểm tra browser có chặn popup không
- Xem Console (F12) có lỗi không

### Dữ liệu không lưu:
- Kiểm tra localStorage có bị disable không
- Thử ở chế độ incognito

### Countdown không chạy:
- Kiểm tra định dạng ngày giờ
- Đảm bảo múi giờ đúng

## 📞 Hỗ Trợ

Nếu gặp vấn đề kỹ thuật, liên hệ Ban Tổ Chức IT.

## 📄 License

Private project for FPT Software & FPTU Year End Party 2026

---

**Made with ❤️ for FPT Community**

🎉 Happy Year End Party 2026! 🎊

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
