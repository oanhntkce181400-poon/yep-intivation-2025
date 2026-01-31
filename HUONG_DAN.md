# Hướng Dẫn Sử Dụng Website Thiệp Mời Year End Party 2026

## 🎉 Tính Năng Chính

### 1. Hiển thị thông tin sự kiện
- Tên sự kiện: **Year End Party 2026**
- Đối tượng: **FPT Software, FPTU, Lớp Tiếng Nhật, BrSE**
- Thời gian: **31/12/2026, 18:00 - 22:00** (Check-in từ 17:30)
- Địa điểm: **FPT Tower, Khu Công Nghệ Cao, Quận 9, TP.HCM**

### 2. Countdown Timer
- Đếm ngược thời gian đến sự kiện
- Hiển thị: Ngày : Giờ : Phút : Giây

### 3. Form Đăng Ký RSVP
Form thu thập các thông tin:
- **Họ và tên**: Tên người đăng ký
- **Lời nhắn**: Gửi lời nhắn đến Ban Tổ Chức
- **Tham dự**: Có/Không/Chưa chắc chắn
- **Số người đi cùng**: 1/2/3/4+ người
- **Đơn vị**: FPT Software, FPTU - Lớp Tiếng Nhật, FPTU - Lớp BrSE, FPT Education, Khác

### 4. 📊 Xuất File Excel
**Tính năng đặc biệt**: Mỗi khi ai đó submit form, thông tin sẽ được:
- Lưu vào `localStorage` của trình duyệt
- **Tự động tải xuống file Excel** với tên: `YEP_2026_DangKy_YYYY-MM-DD.xlsx`

#### Cấu trúc file Excel:
| Họ và Tên | Tham dự | Số người đi cùng | Đơn vị | Lời nhắn | Thời gian |
|-----------|---------|------------------|---------|----------|-----------|
| Nguyễn Văn A | Có | 2 người | FPT Software | Rất mong được tham dự | 31/01/2026 10:30:00 |

#### Lưu ý quan trọng:
- File Excel sẽ được download **ngay lập tức** khi người dùng bấm "Gửi lời nhắn"
- Dữ liệu được lưu tích lũy trong localStorage
- Mỗi lần submit mới sẽ thêm vào file Excel với tất cả dữ liệu cũ + mới
- File tải về sẽ có tên theo ngày hiện tại

### 5. Google Maps
- Hiển thị bản đồ địa điểm FPT Tower
- Nút "Mở trong Google Maps" để dẫn đường

### 6. Chia sẻ trên Facebook
- Nút "Chia sẻ lên Facebook" để mời bạn bè

### 7. Responsive Design
- Tương thích hoàn hảo trên cả Desktop và Mobile
- Tối ưu trải nghiệm người dùng

## 🚀 Cách Chạy Project

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Mở trình duyệt tại
http://localhost:3000
```

## 📦 Công Nghệ Sử Dụng

- **Next.js 15** - React Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **XLSX** - Export Excel
- **React Hooks** - State management

## 🎨 Tùy Chỉnh

### Thay đổi thời gian sự kiện:
Trong file `app/page.tsx`, dòng:
```tsx
<Countdown targetDate="2026-12-31T18:00:00" />
```

### Thay đổi địa điểm:
Tìm section "Location Card" trong `app/page.tsx` và cập nhật:
- Tên địa điểm
- Địa chỉ
- Link Google Maps

### Thay đổi dropdown đơn vị:
Trong file `app/components/RSVPForm.tsx`, tìm select với name="dietary"

## 📝 Ghi Chú

- Dữ liệu form được lưu trong **localStorage** của trình duyệt
- Mỗi lần submit sẽ **tự động tải file Excel**
- File Excel chứa tất cả các lần đăng ký từ trước đến nay
- Nếu muốn xóa dữ liệu cũ, mở Console (F12) và gõ:
  ```javascript
  localStorage.removeItem('yep_registrations')
  ```

## 🎯 Checklist Trước Khi Deploy

- [ ] Cập nhật đúng thời gian sự kiện
- [ ] Cập nhật đúng địa điểm và link Google Maps
- [ ] Kiểm tra responsive trên mobile
- [ ] Test chức năng download Excel
- [ ] Test form validation
- [ ] Cập nhật thông tin liên hệ (nếu cần)

## 📞 Hỗ Trợ

Nếu có vấn đề kỹ thuật, vui lòng liên hệ Ban Tổ Chức IT.

---

**Made with ❤️ for FPT Software & FPTU Year End Party 2026**
