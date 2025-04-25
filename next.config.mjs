/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['pdfjs-dist/build/pdf'] = 'pdfjs-dist/legacy/build/pdf';
    config.resolve.alias['pdfjs-dist/build/pdf.worker.entry'] = 'pdfjs-dist/legacy/build/pdf.worker.entry';
    return config;
  },
};

export default nextConfig;
