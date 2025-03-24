/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
   compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})(nextConfig);
