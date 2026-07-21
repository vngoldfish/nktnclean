# NKTN / Bawui Cleaning Website

Website chính thức cho **株式会社NKTN / Bawui Cleaning** tại domain:

```text
https://clean.bawui.com
```

Dự án được xây dựng bằng **Next.js**, hỗ trợ đa ngôn ngữ, SEO kỹ thuật, AI SEO/GEO, sitemap, robots, structured data và Google Analytics.

## Tổng quan

株式会社NKTN / Bawui Cleaning là website giới thiệu dịch vụ:

- Vệ sinh phòng khách sạn
- Vệ sinh minpaku / Airbnb
- Quản lý hiện trường vệ sinh
- Báo cáo ảnh sau vệ sinh
- Cleaning DX
- LINE chatbot cho báo cáo phòng
- Gửi ảnh P/OUT
- AI tự chọn tin nhắn cần dịch
- Tự động nhắc nhân viên khi thiếu báo cáo / thiếu ảnh / trễ giờ
- Thống kê lỗi theo ngày/tháng để cải thiện chất lượng

## Công nghệ sử dụng

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Google Analytics 4
- JSON-LD structured data

## Cấu trúc chính

```text
app/
  [locale]/
    page.tsx                    # Trang chủ đa ngôn ngữ
    services/page.tsx           # Dịch vụ
    strengths/page.tsx          # Thế mạnh
    dx/page.tsx                 # Cleaning DX
    blog/page.tsx               # Blog
    blog/[slug]/page.tsx        # Chi tiết blog
    company/page.tsx            # Công ty
    contact/page.tsx            # Liên hệ
    faq/page.tsx                # FAQ
    privacy/page.tsx            # Privacy Policy
    [landing]/page.tsx          # Landing pages SEO keyword
  layout.tsx                    # Root metadata
  sitemap.ts                    # Sitemap động
  robots.ts                     # Robots.txt động
  opengraph-image.tsx           # OG image động

components/
  site-header.tsx
  site-footer.tsx
  sticky-line-button.tsx
  analytics.tsx
  analytics-events.tsx
  ui/

lib/
  i18n.ts                       # Locale config
  seo.ts                        # SEO helpers, canonical, hreflang, JSON-LD
  site-data-i18n.ts             # Nội dung đa ngôn ngữ

public/
  logo.png
  favicon.svg
  llms.txt                      # AI SEO/GEO file
```

## Ngôn ngữ hỗ trợ

Website hỗ trợ các locale:

| Locale | Ngôn ngữ |
|---|---|
| `ja` | 日本語 |
| `en` | English |
| `zh` | 中文 |
| `ne` | नेपाली |
| `fil` | Filipino |
| `id` | Bahasa Indonesia |
| `vi` | Tiếng Việt |

URL ví dụ:

```text
https://clean.bawui.com/ja
https://clean.bawui.com/en
https://clean.bawui.com/vi
```

## Landing pages SEO

Dự án có các landing page keyword chính:

```text
/ja/osaka-hotel-cleaning
/ja/minpaku-cleaning-osaka
/ja/airbnb-cleaning-osaka
/ja/cleaning-dx-line-chatbot
```

Các trang này phục vụ SEO cho những keyword như:

- ホテル 清掃 大阪
- 民泊 清掃 大阪
- Airbnb 清掃 大阪
- LINE 清掃 管理
- Cleaning DX
- 清掃 写真報告

## SEO đã tích hợp

Dự án đã có các phần SEO kỹ thuật:

- Metadata riêng cho từng trang
- Canonical URL
- Hreflang cho đa ngôn ngữ
- Sitemap động tại `/sitemap.xml`
- Robots tại `/robots.txt`
- Open Graph metadata
- Twitter card metadata
- Open Graph image động
- Server redirect `/` về locale mặc định `/ja`
- Structured data JSON-LD
- AI SEO/GEO qua `public/llms.txt`

## Structured data JSON-LD

Các schema đã tích hợp:

- `Organization`
- `LocalBusiness`
- `Service`
- `OfferCatalog`
- `FAQPage`
- `Article`
- `BreadcrumbList`

## AI SEO / GEO

File sau được tạo để hỗ trợ AI crawler như ChatGPT, Perplexity, Gemini, Claude và các hệ thống tìm kiếm AI:

```text
public/llms.txt
```

Nội dung file này mô tả rõ:

- NKTN / Bawui Cleaning là ai
- Dịch vụ chính
- Khu vực hỗ trợ
- Cleaning DX
- LINE chatbot
- Dịch thuật AI chọn lọc
- Tự động nhắc nhân viên
- Thống kê lỗi ngày/tháng
- Các URL quan trọng

## Google Analytics

Dự án đã tích hợp Google Analytics 4 qua biến môi trường:

```env
NEXT_PUBLIC_GA_ID=G-YSHRZZGGYN
```

Các click event được gắn tracking qua `data-analytics`, bao gồm:

- `line_header_click`
- `line_footer_click`
- `line_sticky_click`
- `line_landing_click`
- `line_landing_bottom_click`
- `email_footer_click`
- `phone_footer_click`

## Biến môi trường

Tạo file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://clean.bawui.com
NEXT_PUBLIC_GA_ID=G-YSHRZZGGYN
```

Lưu ý: `.env.local` đã được đưa vào `.gitignore`, không nên commit file này lên Git.

## Cài đặt

Cài Node.js LTS trước, sau đó chạy:

```bash
npm install
```

## Chạy local

```bash
npm run dev
```

Mở trình duyệt:

```text
http://localhost:3000
```

Trang `/` sẽ redirect về:

```text
http://localhost:3000/ja
```

## Build production

Dự án sử dụng Next.js **static export** trong `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Build ở máy local:

```bash
npm run build
```

Sau khi build, thư mục `out/` chứa toàn bộ file HTML/CSS/JS tĩnh. Upload thư mục này lên bất kỳ hosting static nào (Nginx, Apache, Cloudflare Pages, Vercel, Netlify...).

## Deploy lên VPS với Nginx

Upload toàn bộ nội dung thư mục `out/` lên VPS, ví dụ vào `/var/www/clean-bawui/`.

Cấu hình Nginx:

```nginx
server {
    server_name clean.bawui.com;
    root /var/www/clean-bawui;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }
}
```

> **Lưu ý**: Vì dùng static export, VPS không cần cài Node.js. Chỉ cần web server (Nginx/Apache) để serve file tĩnh.

## Kiểm tra SEO sau deploy

Sau khi deploy lên domain thật, cần kiểm tra:

```text
https://clean.bawui.com/sitemap.xml
https://clean.bawui.com/robots.txt
https://clean.bawui.com/llms.txt
```

Nên submit sitemap vào Google Search Console:

```text
https://clean.bawui.com/sitemap.xml
```

## Google Search Console

Nên thêm domain vào Google Search Console:

```text
clean.bawui.com
```

Sau đó submit sitemap:

```text
https://clean.bawui.com/sitemap.xml
```

## Google Business Profile

Để tăng Local SEO tại Osaka/Kansai, nên tạo Google Business Profile với thông tin thống nhất:

```text
Tên: 株式会社NKTN / Bawui Cleaning
Địa chỉ: 大阪市西成区鶴見橋1丁目17-14-302
Điện thoại: 080-8029-3713
Website: https://clean.bawui.com
Email: info@bawui.com
```

## Deploy

### Deploy lên VPS (Static Files)

Build ở local rồi upload thư mục `out/` lên VPS.

Biến môi trường cần set **trước khi build** (trong `.env.local`):

```env
NEXT_PUBLIC_SITE_URL=https://clean.bawui.com
NEXT_PUBLIC_GA_ID=G-YSHRZZGGYN
```

> **Lưu ý**: Vì static export, biến môi trường được bake vào HTML/JS lúc build. Không thể thay đổi sau khi build.

### Deploy trên Vercel

Nếu deploy trên Vercel, cần đặt biến môi trường trên hosting:

```env
NEXT_PUBLIC_SITE_URL=https://clean.bawui.com
NEXT_PUBLIC_GA_ID=G-YSHRZZGGYN
```

Các bước:

1. Import project
2. Set environment variables
3. Deploy
4. Trỏ domain `clean.bawui.com`
5. Kiểm tra sitemap, robots, GA và Search Console

## Checklist trước khi public

- [ ] `npm install` chạy thành công
- [ ] `npm run build` chạy thành công
- [ ] Domain `clean.bawui.com` trỏ đúng hosting
- [ ] `.env.local` hoặc env hosting có `NEXT_PUBLIC_SITE_URL`
- [ ] GA4 hoạt động
- [ ] Sitemap mở được
- [ ] Robots mở được
- [ ] llms.txt mở được
- [ ] Submit sitemap vào Google Search Console
- [ ] Tạo Google Business Profile
- [ ] Test mobile sticky LINE button
- [ ] Test click LINE / email / phone

## Scripts

```bash
npm run dev      # chạy development server
npm run build    # build production
npm run start    # chạy production server
npm run lint     # kiểm tra lint nếu Next lint khả dụng
```

## Ghi chú vận hành

- Nội dung đa ngôn ngữ nằm trong `lib/site-data-i18n.ts`.
- SEO helper nằm trong `lib/seo.ts`.
- Landing page keyword nằm trong `app/[locale]/[landing]/page.tsx`.
- Sticky LINE mobile nằm trong `components/sticky-line-button.tsx`.
- Google Analytics nằm trong `components/analytics.tsx` và `components/analytics-events.tsx`.

## License

Private project for 株式会社NKTN / Bawui Cleaning.
