/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  rewrites: async () => {
    return [
      {
        source: "/api/v1/:path*",
        destination: "http://localhost:8000/api/v1/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
