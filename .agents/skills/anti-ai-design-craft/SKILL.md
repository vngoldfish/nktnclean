---
name: anti-ai-design-craft
description: >-
  Áp dụng bộ nguyên tắc thiết kế UI/UX độc bản, loại bỏ các khuôn mẫu "AI boilerplate" (như 3 cột card lặp lại, màu tím generic, bố cục phẳng vô hồn) và thay thế bằng trải nghiệm thủ công cao cấp (Human-Crafted Aesthetics, Asymmetry, Visual Rhythm, Layered Depth).
---

# Anti-AI Design Craft: Kỹ thuật Thiết kế Giao diện Độc bản

Mục đích của Skill này là giúp AI loại bỏ hoàn toàn các thói quen thiết kế rập khuôn, nhàm chán thường thấy ở các mô hình AI, chuyển sang phong cách thiết kế tinh tế, đậm tính thẩm mỹ và được tinh chỉnh tỉ mỉ như một Senior Product Designer.

---

## 🚫 1. Những lỗi "AI Design Clichés" tuyệt đối cần tránh

| Lỗi thiết kế AI phổ biến | Vì sao tệ? | Giải pháp Human-Crafted |
| :--- | :--- | :--- |
| **Grid-of-3 vô tận** | Mọi section đều chia 3 cột đều chằn chặn với card bo tròn trắng. Gây mỏi mắt và đơn điệu. | **Bento Grid bất đối xứng** (1 ô lớn + 2 ô nhỏ), dạng so le (Zigzag timeline), hoặc Interactive Tabs. |
| **Icon trong ô vuông bo tròn mờ** | `div size-12 rounded-2xl bg-sky-50` đặt trên đầu mỗi card. | Tích hợp icon vào ngữ cảnh cụ thể: floating icon, step badge, visual illustration, hoặc typography làm điểm nhấn. |
| **CTA đen/tím lặp lại** | Lặp lại 3-4 khối CTA giống hệt nhau từ trên xuống dưới. | **Đa dạng hóa biến thể CTA**: Quick Quote Calculator, Hotline Dock, Instant LINE Bar, Trust Guarantee Box. |
| **Màu sắc phẳng & nhợt nhạt** | Chỉ dùng slate-50/100/900 và 1 màu primary không có chiều sâu. | **Color Hierarchy phong phú**: Màu nền ấm (`#F8FAFC`, `#F0FDF4`), màu nhấn tạo sự tin cậy (Marine Navy, Osaka Emerald, Warm Gold). |
| **Typography thiếu tương phản** | Tiêu đề và nội dung dùng cùng một trọng lượng, không có nhịp điệu. | Tương phản cực độ giữa Headline đậm nét (800/900) với Subtitle nhẹ nhàng; kết hợp nhãn phụ chữ hoa với letter-spacing rộng. |

---

## 💎 2. Các nguyên lý thiết kế Độc bản (Human-Crafted Principles)

### 1. Nhịp điệu Thị giác (Visual Rhythm & Pacing)
- Không bao giờ đặt 2 section có cùng cấu trúc layout cạnh nhau.
- **Hero** (Asymmetric + Floating Elements) $\rightarrow$ **Trust Ticker / Marquee** (Compact) $\rightarrow$ **Interactive Tabs Showcase** (Dynamic) $\rightarrow$ **Bento Grid** (Rich visual cards) $\rightarrow$ **Comparison Table** (High Trust Conversion) $\rightarrow$ **Customer Voice / Social Proof** (Grid Cards) $\rightarrow$ **Final Action Hub**.

### 2. Chiều sâu Đa tầng (Layered Depth & Glassmorphism)
- Sử dụng kết hợp:
  * Viền mảnh sắc nét (`border-slate-200/80` hoặc `ring-1 ring-black/5`).
  * Đổ bóng mềm mại đa tầng (`shadow-[0_8px_30px_rgb(0,0,0,0.04)]`).
  * Nền kính mờ (`backdrop-blur-md bg-white/85`).
  * Điểm sáng phản chiếu (Glow accents) ở góc thẻ.

### 3. Tương tác có chủ đích (Intentional Micro-Interactions)
- Card có hiệu ứng nâng nhẹ (`hover:-translate-y-1 hover:shadow-lg transition-all duration-300`).
- Nút bấm chính có hiệu ứng ánh sáng chạy qua (Shimmer effect) hoặc icon trượt nhẹ khi hover.
- Bảng chọn tab chuyển đổi trạng thái mượt mà không giật layout.

---

## 🛠 3. Checklist tự kiểm tra trước khi hoàn thiện UI
- [ ] Trang có bị lặp lại các khối 3-cột giống hệt nhau không?
- [ ] Các điểm chạm CTA có đa dạng và kích thích hành động hay chỉ là một khối tĩnh?
- [ ] Đã có Bảng so sánh (Comparison) hoặc Chứng thực (Trust metrics) chưa?
- [ ] Giao diện mobile có thanh điều hướng chuyển đổi nhanh (Sticky Conversion Bar) không?
- [ ] Typography có phân cấp rõ ràng giữa nhãn nhỏ (eyebrow), tiêu đề chính (h1/h2) và đoạn mô tả không?
