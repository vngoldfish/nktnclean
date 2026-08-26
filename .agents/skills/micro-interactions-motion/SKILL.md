---
name: micro-interactions-motion
description: >-
  Kỹ thuật thiết kế tương tác vi mô (Micro-interactions) và chuyển động mượt mà bằng Framer Motion & CSS cao cấp, tạo cảm giác sang trọng, tinh tế và tương tác tự nhiên.
---

# Micro-Interactions & Motion: Kỹ thuật Tương tác Đỉnh cao

Chuyển động trong giao diện người dùng không phải để phô diễn mà là để:
1. **Dẫn dắt mắt người xem** theo thứ tự ưu tiên thông tin (Visual focal point).
2. **Cung cấp phản hồi xúc giác/thị giác tức thì** khi người dùng tương tác (Immediate feedback).
3. **Tạo cảm giác sản phẩm cao cấp, đáng tin cậy** (Crafted Polish).

---

## ⚡ 1. Các Pattern Tương tác Cốt lõi

### A. Dynamic Floating Badge (Huy hiệu nổi)
- Huy hiệu nổi với chuyển động nhấp nhô nhẹ (`animate-pulse` chậm hoặc float animation `translateY(-4px)`).
- Hiệu ứng ánh sáng viền chạy qua (Border glow shimmer).

### B. Interactive Service Switcher (Tabs mượt mà)
- Chuyển tab với hiệu ứng cross-fade hoặc layout animation bằng `framer-motion` (`layoutId="activeTab"`).
- Nội dung tab xuất hiện với hiệu ứng slide nhẹ từ dưới lên kèm fade in (`y: 10 -> 0`, `opacity: 0 -> 1`).

### C. Comparison Row Highlight on Hover
- Khi rê chuột vào một hàng trong Bảng so sánh, hàng đó được làm nổi bật với nền highlight mềm mại và icon xác nhận nở nhẹ (`scale: 1.08`).

---

## 🛡️ 2. Quy tắc Tối ưu Hiệu năng & Khả năng Tiếp cận (Accessibility)

- Luôn tôn trọng người dùng bật chế độ giảm chuyển động (`@media (prefers-reduced-motion: reduce)`).
- Sử dụng `transform` và `opacity` cho animation để tận dụng GPU acceleration (60fps mượt mà).
- Không làm trễ thời gian tương tác của người dùng (thời lượng chuyển cảnh lý tưởng là 200ms - 350ms).
