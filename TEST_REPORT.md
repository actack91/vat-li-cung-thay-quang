# Kiểm tra bản cấp tốc

## Rà soát ngày 05/10/2026

- Chạy lại `node --test tests.mjs`: 10/10 nhóm đạt, không có nhóm thất bại hoặc bị bỏ qua. Đây là kiểm tra mã nguồn tại workspace; chưa phải lần kiểm tra lại website công khai trong ngày.
- Đối chiếu checklist: T12 và G10-06 vẫn chờ phản hồi giáo viên/học sinh, chưa đánh dấu hoàn thành.
- Lượt thử thực tế đề nghị: mỗi khối có 2–3 học sinh mở link trên thiết bị thường dùng, hoàn thành một trạm, tải lại giữa lượt và luyện lại một câu sai. Ghi mã câu hoặc tên trạm, thao tác, kết quả mong đợi và kết quả thực tế khi có lỗi.
- Nội dung cần giáo viên xác nhận còn lại: đề 6102 IV.2 được diễn giải làm tròn đến hàng phần trăm, kết quả 0,12 s (xem CONTENT_REVIEW.md).

## Đã thực hiện

- 6 nhóm kiểm thử Node thành công: mã/nội dung ngân hàng, nhập số, tính cơ năng/quãng đường độc lập, đổi đơn vị đồ thị, chu kì/năng lượng, đáp án đúng/nhiễu toàn ngân hàng.
- Trình duyệt: hoàn thành trạm đồ thị 10 câu (cố tình sai câu đầu), năng lượng 14/14, nền tảng 16/16; kiểm tra tổng kết tương ứng.
- Nhập trống bị chặn; 2,0 được chấm đúng; gợi ý được đếm và hiển thị.
- Tải lại sau khi trả lời vẫn giữ câu, đáp án và phản hồi.
- Câu sai được lưu, luyện lại đúng không gợi ý thì được loại khỏi danh sách.
- Chế độ tổng hợp chạy hết 12 câu, không trùng trong lượt đã kiểm tra.
- Kiểm tra hình ảnh trang chủ ở máy tính và màn hình 390×844; đồ thị trên điện thoại; không tràn ngang.
- Không ghi nhận lỗi console trong phiên thử local.

## Chưa xác nhận

- Chưa có phản hồi thử nghiệm của giáo viên và học sinh thật (T12).
- Chưa đo thời gian trung bình hoàn thành của học sinh; 10–15 phút là gợi ý phân bổ thời gian.
- Chưa thực hiện thử tải 20–30 thiết bị thực tế. Website tĩnh, không có máy chủ chấm bài.
- Cơ chế dữ liệu hỏng/không lưu được được xử lý trong mã; chưa kiểm tra trực tiếp mọi chế độ trình duyệt riêng tư/hạn chế lưu trữ.

## Xác nhận xuất bản

- GitHub Pages build thành công: https://github.com/actack91/vat-li-cung-thay-quang/actions/runs/36970713654
- Website: https://actack91.github.io/vat-li-cung-thay-quang/
- Đã mở link HTTPS, hoàn thành trạm đồ thị 10/10, tải lại giữ phản hồi, không lỗi console. Kiểm tra trên thiết bị riêng của học sinh vẫn thuộc T12.

## Kiểm tra bổ sung lớp 10

- 10 nhóm kiểm thử Node đạt (gồm toàn bộ 6 nhóm lớp 11). Đối chiếu 25 đáp án mã 1101, tính độc lập quãng đường/vận tốc, kiểm tra các hình SVG và không trùng mã giữa 72 câu hai lớp.
- Trình duyệt local: La bàn dịch chuyển 12/12, Chặng đua tốc độ 8/8, Thám tử chuyển động 12/12.
- Lượt tổng hợp 12 câu không trùng, đúng 4 câu mỗi trạm; có tạo câu sai khi chủ động trả lời sai.
- Lưu và tải lại câu lớp 10 thành công. Chuyển 10 → 11 → 10 giữ riêng lượt đang dở, lịch sử và câu sai. Tiến độ lớp 11 dùng nguyên khoá cũ nên không cần chuyển dữ liệu.
- Thử tiếp một câu đồ thị lớp 11 sau thay đổi: chấm đúng và phản hồi đúng.
- Kiểm tra hình vectơ ở máy tính, bốn đồ thị lựa chọn trên màn hình 390×844; không tràn ngang. Không ghi nhận lỗi console ở trạm đồ thị lớp 10.
- Chưa có phản hồi chơi thử của giáo viên/học sinh cho phần lớp 10. Chưa kiểm thử tải đồng thời nhiều thiết bị.

- Xuất bản lớp 10: Pages run 36984238890 thành công. Trên link công khai ?grade=10 đã hoàn thành Chặng đua tốc độ 8/8, tải lại giữ phản hồi và chuyển 10 → 11 → 10 giữ tiến độ riêng.

## Lớp 12 — 05/10/2026

- 12/12 nhóm kiểm thử Node đạt; đủ 109 mã câu duy nhất cho ba khối, đối chiếu đáp án 7101 và tính lại các bài số.
- Trình duyệt local: hoàn thành Nhiệt độ & nội năng 9/9, Nhiệt lượng & chuyển thể 11/11, Vận dụng nhiệt học 17/17; dữ kiện chung từng ý đúng–sai hiển thị đầy đủ.
- Nhập 9,81 và 23,1 được chấm đúng. Tải lại kết quả và chuyển lớp 12 → 10 → 12 giữ riêng tiến độ; dữ liệu lớp 10 có trước vẫn được giữ.
- Đã xem trang chủ desktop. Chưa có phản hồi học sinh thật cho lớp 12.

- Pages run 37293977263 thành công (commit 9b272ea). Link ?grade=12 hiển thị đủ ba trạm; trả lời câu, tải lại giữ phản hồi, chuyển qua lớp 11 và về lớp 12 giữ lượt dở; không lỗi console.
- Lượt tổng hợp local hiển thị 12 câu và giữ phản hồi sau tải lại. Chưa xác nhận lại bố cục mobile lớp 12: công cụ đặt viewport vẫn trả kích thước 1280 px, nên không tính là kiểm tra 390 px thành công.

## Hai đề tham khảo lớp 10 — 06/10/2026

15 nhóm kiểm thử đạt. Trình duyệt local chạy hết đề 01 và 02, mỗi đề 24/24 đúng; nhập số âm và dấu phẩy; tải lại kết quả giữ nguyên. Trang tự luận không có ô nhập, không tính vào điểm. Đã xem đồ thị số liệu mới của đề 02, không lỗi console. Tổng hợp vẫn lấy 4 câu từ mỗi trạm cũ, không tăng thành 20 câu do thêm hai đề.
