import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/app/i18n/index.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "aiartshop.com", "th.bing.com", "i.ibb.co"],
  },
};

export default withNextIntl(nextConfig);
