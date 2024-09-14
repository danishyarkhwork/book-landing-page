/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["cdn.prod.website-files.com"],
  },
};

module.exports = nextConfig;
