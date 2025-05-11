/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: '**' },
      { protocol: 'https', hostname: '**' },
    ],
  },

  webpack(config, { nextRuntime  }) { 

    if (nextRuntime === "nodejs") {
      config.resolve.alias.canvas = false;
    }

    // Proper alias to use legacy build of pdfjs-dist (NO canvas required)
    config.resolve.alias = {
      ...config.resolve.alias,
      'pdfjs-dist': 'pdfjs-dist/legacy/build/pdf',
      'pdfjs-dist/build/pdf.worker.entry': 'pdfjs-dist/legacy/build/pdf.worker.entry',
    };

    return config;
  },
};

export default nextConfig;
