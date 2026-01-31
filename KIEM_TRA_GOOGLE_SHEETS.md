# 🔍 KIỂM TRA TOÀN DIỆN GOOGLE SHEETS INTEGRATION

## ✅ CHECKLIST - Làm theo từng bước

### Bước 1: Kiểm tra Google Apps Script

1. **Mở Google Sheets của bạn**
   - Link: https://docs.google.com/spreadsheets/d/14aHMVN_6tPXpIpji6Epe-uWvUBdR9MoxzF4U49fKuTs/edit

2. **Mở Apps Script**
   - Menu: **Extensions** → **Apps Script**

3. **Thay thế code**
   - Xóa tất cả code cũ
   - Copy toàn bộ code từ file `google-apps-script.js` 
   - Paste vào Apps Script

4. **Test trong Apps Script**
   - Click dropdown bên cạnh nút **Run**
   - Chọn function **testDoPost**
   - Click **Run**
   - Nếu lần đầu, cho phép quyền truy cập
   - Xem **Execution log** (View → Logs) xem có lỗi không
   - Kiểm tra Google Sheets xem có dòng test không

5. **Deploy lại**
   - Click **Deploy** → **Manage deployments**
   - Click **Edit** (icon bánh răng)
   - Đảm bảo:
     - **Execute as**: Me
     - **Who has access**: **Anyone** (rất quan trọng!)
   - Click **Deploy**
   - Copy lại **Web app URL** mới (có thể khác URL cũ)

### Bước 2: Cập nhật URL trong Code

1. **Copy URL từ deployment**
   - Ví dụ: `https://script.google.com/macros/s/AKfycby.../exec`

2. **Paste vào file**
   - File: `app/components/RSVPForm.tsx`
   - Dòng 7: thay thế `GOOGLE_SCRIPT_URL`

3. **Restart server**
   ```bash
   Ctrl+C
   npm run dev
   ```

### Bước 3: Test từ Website

1. **Mở browser Console** (F12)

2. **Điền form và submit**

3. **Kiểm tra Console**
   - Phải thấy: `📝 Đang gửi dữ liệu:` với data
   - Phải thấy: `✅ Đã gửi dữ liệu lên Google Sheets`

4. **Kiểm tra Google Sheets**
   - Refresh trang Google Sheets
   - Phải có sheet tên **Registrations**
   - Phải có dữ liệu vừa submit

### Bước 4: Xem Logs trong Apps Script (nếu không có dữ liệu)

1. Trong Apps Script, click **Executions** (icon đồng hồ bên trái)
2. Xem list các lần chạy gần đây
3. Click vào execution gần nhất
4. Xem logs để biết lỗi gì

## 🐛 TROUBLESHOOTING

### Vấn đề 1: Không thấy dữ liệu trong Sheet
**Nguyên nhân:**
- URL deployment sai
- "Who has access" không phải "Anyone"
- Code Apps Script có lỗi

**Giải pháp:**
1. Chạy `testDoPost()` trong Apps Script
2. Nếu có lỗi, xem log
3. Redeploy với setting "Anyone"
4. Copy URL mới

### Vấn đề 2: Lỗi "Authorization required"
**Giải pháp:**
1. Trong Apps Script, chạy function `testDoPost`
2. Click **Review permissions**
3. Chọn account của bạn
4. Click **Advanced** → **Go to... (unsafe)**
5. Click **Allow**

### Vấn đề 3: URL không đúng format
**Giải pháp:**
URL phải có dạng:
```
https://script.google.com/macros/s/[DEPLOYMENT_ID]/exec
```

Không phải:
```
https://script.google.com/home/projects/...
```

### Vấn đề 4: CORS Error
**Đã xử lý:**
- Code đã dùng `mode: 'no-cors'`
- Không cần lo về CORS nữa
- Dữ liệu vẫn gửi lên được

## 📊 Cấu Trúc Sheet Sau Khi Có Dữ Liệu

Sheet **Registrations** sẽ có dạng:

| STT | Họ và Tên | Tham dự | Số người đi cùng | Đơn vị | Lời nhắn | Thời gian |
|-----|-----------|---------|------------------|---------|----------|-----------|
| 1   | Nguyễn Văn A | Có | 2 người | FPT Software | Hello | 31/01/2026 15:30 |
| 2   | Trần Thị B | Chưa chắc | 1 người | FPTU | ... | 31/01/2026 16:00 |

## 🔧 Test Bằng Postman/cURL (Advanced)

Nếu muốn test trực tiếp API:

```bash
curl -X POST YOUR_DEPLOYMENT_URL \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "attendance": "Có",
    "guests": "1 người",
    "unit": "FPT Software",
    "message": "Test message",
    "timestamp": "31/01/2026 15:00"
  }'
```

Hoặc test GET:
```bash
curl YOUR_DEPLOYMENT_URL
```
Phải trả về: `{"status":"API is working"}`

## 📞 Nếu Vẫn Không Được

1. **Check Console logs** (F12)
2. **Check Apps Script Executions**
3. **Chạy testDoPost() và xem logs**
4. **Đảm bảo "Anyone" access**
5. **Copy URL deployment đúng**

---

**Lưu ý:** Với `no-cors` mode, website không thể biết chính xác request có thành công không, nhưng dữ liệu vẫn được gửi lên Google Sheets. Hãy luôn kiểm tra bằng cách refresh Google Sheets!
