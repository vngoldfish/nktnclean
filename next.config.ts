import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true, // (Nếu bạn đã thêm ở bước trước)
  },
  experimental: {
    webpackBuildWorker: false, // <-- Thêm dòng này để sửa lỗi crash bộ nhớ
  },
};

export default nextConfig;