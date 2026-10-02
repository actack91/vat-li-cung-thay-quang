# Vật Lí cùng thầy Quang

Bản ôn tập cấp tốc Dao động điều hoà lớp 11. Web tĩnh HTML/CSS/JavaScript, không cần cài thư viện hoặc có máy chủ ứng dụng.

## Học sinh sử dụng

1. Mở website và chọn một trong ba trạm hoặc Thử thách tổng hợp.
2. Tính ra giấy, chọn đáp án hoặc nhập số. Dấu phẩy và dấu chấm thập phân đều được chấp nhận. Nhập số không kèm đơn vị.
3. Bấm Kiểm tra đáp án và đọc lời giải; chuyển câu tiếp theo.
4. Xem kết quả, tải phiếu kết quả nếu muốn; luyện lại câu sai.
5. Tải lại trang có thể tiếp tục lượt đang dở. Tiến độ chỉ lưu trong trình duyệt của thiết bị này, chưa đồng bộ hoặc gửi cho giáo viên.

## Dành cho giáo viên

40 câu gồm 16 nền tảng, 10 đồ thị và 14 năng lượng; tổng hợp chọn 4 câu mỗi nhóm. Có chọn đáp án, đúng–sai, nhập số, gợi ý, lời giải, lịch sử 30 lượt. Điểm thưởng không phải điểm thi chính thức. Phiếu kết quả tự luyện chưa được xác thực. Các chức năng tài khoản, lớp học, cuối kì/cả năm hiển thị Sắp ra mắt.

Trước khi giao cả lớp: đọc CONTENT_REVIEW.md, tự thử một lượt và cho vài học sinh thử. T12 chỉ hoàn thành sau phản hồi thực tế.

## Chạy và cập nhật

Phục vụ thư mục bằng một máy chủ tệp tĩnh (ví dụ `python3 -m http.server 8765`), rồi mở localhost:8765. Không mở index.html bằng file:// vì sử dụng JavaScript module.

Chạy kiểm thử bằng `node --test tests.mjs` (Node hiện đại). Sửa nội dung tại questions.js; sửa giao diện tại app.js/style.css. Kiểm tra rồi commit lên main. GitHub Pages cấu hình main / root sẽ tự xuất bản thay đổi.

Tệp phát hành chính: index.html, style.css, questions.js, app.js, .nojekyll. Không phụ thuộc API AI hoặc dịch vụ trả phí.

## Theo dõi

- [Checklist nghiệm thu](TASKS.md)
- [Rà soát nội dung](CONTENT_REVIEW.md)
- [Kiểm thử và giới hạn](TEST_REPORT.md)

Không đưa mật khẩu, khoá bí mật hoặc dữ liệu học sinh vào kho. Đề Word/Excel gốc không nằm trong kho công khai.
