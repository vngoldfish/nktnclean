# NKTN Clean — Workspace Design & Coding Guidelines (Super Hotel Clean Style)

Khi thực hiện các tác vụ phát triển giao diện (UI/UX) và lập trình trên dự án **nktnclean**, bạn BẮT BUỘC phải tuân thủ các quy chuẩn thiết kế theo phong cách web dịch vụ khách sạn Nhật Bản cao cấp (Reference: **Super Hotel Clean** - `https://superhotelclean.co.jp/`):

---

## 1. Bản sắc Thẩm mỹ & Kiểu chữ (Super Hotel Clean Aesthetic)
- **Typography**: Sử dụng font chữ **Mincho Serif** (`font-serif-jp` / `"Yu Mincho", "游明朝", "Hiragino Mincho Pro", serif`) cho các tiêu đề chính, slogan catchphrase và tên dịch vụ tiếng Anh/tiếng Nhật để toát lên vẻ trang trọng, đẳng cấp doanh nghiệp Nhật.
- **Bảng màu Thương hiệu**:
  * Corporate Ocean Blue (`#00729F` / `#00466D`): Màu chủ đạo uy tín.
  * Cyan High-Tech Accent (`#19BAD7`): Điểm nhấn hiện đại, tinh gọn.
  * Hospitality Green / LINE (`#06C755`): Chuyển đổi tư vấn tức thì.
  * Deep Midnight Slate (`#071224` / `#0B0F19`): Nền footer và hero overlay tạo độ sâu thị giác.
  * Warm Sand / Clean White (`#F6F6F6` / `#FFFFFF`): Nền sáng sạch sẽ, tinh tươm.

---

## 2. Cấu trúc Khối Section Chuẩn Nhật (Section Architecture)
1. **Multi-slide Hero Slider with Tab Selector**: Slider lớn toàn màn hình với dòng tiêu đề Mincho hoành tráng, đi kèm thanh điều hướng tab nhỏ ở chân Hero (`header_slider_nav`).
2. **About & Philosophy / Profile Tabs**: Khối giới thiệu tinh thần "掃く・拭く・磨く" (Quét, Lau, Đánh bóng) với 2 tab chuyển đổi trực quan giữa *PHILOSOPHY (企業理念)* và *PROFILE (会社情報)*.
3. **Core Services with Split Hover Preview**: Trình bày danh mục dịch vụ theo phong cách song ngữ (`Bed making`, `Building maintenance`, `Smart DX Operations`, `Global Staffing`) kèm ảnh preview đồng bộ.
4. **Bảng so sánh chất lượng (Comparison Table)**: Ký hiệu chuẩn Nhật (`◎`, `◯`, `△`, `✕`) đối chiếu NKTN vs Đơn vị thông thường.
5. **Multinational Diversity & Training (採用・現場力)**: Tôn vinh đội ngũ nhân lực đa quốc gia, đào tạo khắt khe chuẩn khách sạn và cơ hội thăng tiến.
6. **Thương hiệu Thiết bị & Hóa chất chuyên dụng**: Thể hiện các đối tác Kärcher, Teramoto, Rinrei, C&S để gia tăng độ tin cậy.
7. **Vertical Floating Contact Button**: Nút liên hệ dọc cố định mép phải màn hình trên Desktop và thanh dính chuyển đổi nhanh ở đáy Mobile.
8. **4-Banner Visual Image Footer**: Chân trang với 4 banner hình ảnh phong cảnh/khách sạn ấn tượng dẫn về *Home*, *Company*, *Service*, *Contact*.

---

## 3. Khả năng Tiếp cận & Đa ngôn ngữ (i18n)
- Dự án hỗ trợ 7 ngôn ngữ (`ja`, `en`, `vi`, `zh`, `ne`, `fil`, `id`). Mọi text mới phải được bọc trong từ điển đa ngôn ngữ hoặc có cơ chế fallback mượt mà.
- Đảm bảo responsive hoàn hảo trên cả Mobile và Desktop.
