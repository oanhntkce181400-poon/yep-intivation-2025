// ====================================
// GOOGLE APPS SCRIPT - RSVP HANDLER
// ====================================
// Copy toàn bộ code này vào Google Apps Script
// Sau đó Deploy như Web App với "Anyone" access

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'API is working' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Log để debug
    Logger.log('========== NEW REQUEST ==========');
    Logger.log('Received POST request');
    Logger.log('Post data: ' + e.postData.contents);
    
    // Parse dữ liệu
    const data = JSON.parse(e.postData.contents);
    
    Logger.log('Parsed data:');
    Logger.log('- name: ' + data.name);
    Logger.log('- attendance: ' + data.attendance);
    Logger.log('- guests: ' + data.guests);
    Logger.log('- unit: ' + data.unit);
    Logger.log('- message: ' + data.message);
    Logger.log('- timestamp: ' + data.timestamp);
    
    // Lấy spreadsheet hiện tại
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Tìm hoặc tạo sheet "Registrations"
    let sheet = ss.getSheetByName('Registrations');
    
    if (!sheet) {
      Logger.log('Creating new sheet: Registrations');
      sheet = ss.insertSheet('Registrations');
      
      // Thêm header row - BỎ CỘT STT
      const headers = ['Họ và Tên', 'Tham dự', 'Số người đi cùng', 'Đơn vị', 'Lời nhắn', 'Thời gian'];
      sheet.appendRow(headers);
      
      // Format header
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Lấy dòng tiếp theo
    const lastRow = sheet.getLastRow();
    const nextRow = lastRow + 1;
    
    // GHI DỮ LIỆU - KHÔNG CÓ STT NỮA
    const rowData = [
      [
        data.name || '',                                              // Cột A: Họ và Tên
        data.attendance || '',                                        // Cột B: Tham dự
        data.guests || '',                                            // Cột C: Số người đi cùng
        data.unit || '',                                              // Cột D: Đơn vị
        data.message || '',                                           // Cột E: Lời nhắn
        data.timestamp || new Date().toLocaleString('vi-VN')          // Cột F: Thời gian
      ]
    ];
    
    // Ghi cả dòng một lúc vào range từ cột A đến F (6 cột)
    sheet.getRange(nextRow, 1, 1, 6).setValues(rowData);
    
    Logger.log('Data written successfully to row ' + nextRow);
    
    Logger.log('Row added successfully');
    
    // Trả về kết quả thành công
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: 'Đã thêm dữ liệu thành công',
        row: stt
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    // Trả về lỗi
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString(),
        message: 'Có lỗi xảy ra'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - chạy để kiểm tra
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Nguyễn Văn Test',
        attendance: 'Có',
        guests: '2 người',
        unit: 'FPT Software',
        message: 'Test message',
        timestamp: new Date().toLocaleString('vi-VN')
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log('Test result: ' + result.getContent());
}
