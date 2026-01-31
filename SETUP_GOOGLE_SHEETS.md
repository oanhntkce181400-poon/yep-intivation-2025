# Hướng Dẫn Setup Google Sheets API

## Bước 1: Tạo Google Apps Script

1. Mở Google Sheets của bạn: https://docs.google.com/spreadsheets/d/14aHMVN_6tPXpIpji6Epe-uWvUBdR9MoxzF4U49fKuTs/edit

2. Vào menu **Extensions** → **Apps Script**

3. Xóa code mặc định và paste đoạn code này:

```javascript
function doPost(e) {
  try {
    // Parse dữ liệu từ request
    const data = JSON.parse(e.postData.contents);
    
    // Lấy spreadsheet và sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('Registrations');
    
    // Nếu sheet chưa tồn tại, tạo mới
    if (!sheet) {
      sheet = ss.insertSheet('Registrations');
      // Thêm header
      sheet.appendRow(['Họ và Tên', 'Tham dự', 'Số người đi cùng', 'Đơn vị', 'Lời nhắn', 'Thời gian']);
    }
    
    // Thêm dữ liệu mới
    sheet.appendRow([
      data.name,
      data.attendance,
      data.guests,
      data.unit,
      data.message,
      data.timestamp
    ]);
    
    // Trả về kết quả thành công
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Trả về lỗi
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Bước 2: Deploy Apps Script

1. Click nút **Deploy** (góc trên bên phải) → **New deployment**

2. Chọn type: **Web app**

3. Cấu hình:
   - **Description**: RSVP Form Handler
   - **Execute as**: Me (email của bạn)
   - **Who has access**: Anyone

4. Click **Deploy**

5. **Quan trọng**: Copy **Web app URL** (dạng: `https://script.google.com/macros/s/AKfycby.../exec`)

## Bước 3: Cập nhật URL vào Code

1. Mở file: `app/api/submit-rsvp/route.ts`

2. Thay thế dòng:
```typescript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

Thành:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
```

3. Lưu file và restart server

## Bước 4: Test

1. Truy cập website
2. Điền form và submit
3. Kiểm tra Google Sheets xem dữ liệu đã được thêm chưa

## Troubleshooting

### Lỗi "Authorization required"
- Vào Apps Script → Run → chạy function `doPost` một lần
- Cho phép quyền truy cập

### Lỗi "Access denied"
- Kiểm tra lại "Who has access" phải là **Anyone**
- Redeploy lại Web app

### Dữ liệu không lên Google Sheets
- Kiểm tra Console (F12) xem có lỗi không
- Kiểm tra URL trong `route.ts` đã đúng chưa
- Kiểm tra Google Sheets ID có đúng không

## Cấu Trúc Dữ Liệu

| Họ và Tên | Tham dự | Số người đi cùng | Đơn vị | Lời nhắn | Thời gian |
|-----------|---------|------------------|---------|----------|-----------|
| Nguyễn Văn A | Có | 2 người | FPT Software | Xin chào | 31/01/2026 10:30:00 |

## Bảo Mật

- URL Web app là public nhưng chỉ có thể POST dữ liệu
- Không ai có thể đọc hoặc xóa dữ liệu qua URL này
- Chỉ bạn (owner) mới xem được Google Sheets

---

**Lưu ý**: Sau khi setup xong, người dùng sẽ không thấy file Excel download nữa, chỉ có thông báo "Cảm ơn bạn!" và dữ liệu sẽ tự động lên Google Sheets của bạn.
