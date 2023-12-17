/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
//   env: {
//     BASE_URL: "https://msgapi.appswind.com/v1",
//     SITE_URL: "https://msg.appswind.com",
//   },
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);