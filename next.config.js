const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `${BLOG_URL}/blog/:path+`,
      },
      {
        source: "/blog-static/_next/:path+",
        destination: `${BLOG_URL}/blog-static/_next/:path+`,
      },
      {
        source: "/blog-live-editor",
        destination: `${BLOG_URL}/admin/index.html`,
      },
      {
        source: "/blog-live-editor/:path*",
        destination: `${BLOG_URL}/admin/index.html/#/~/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
