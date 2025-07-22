const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    // Remove trailing slash from BLOG_URL to prevent double slashes
    const blogURL = BLOG_URL?.replace(/\/$/, '') || '';
    
    return [
      {
        source: "/blog",
        destination: `${blogURL}/blog`,
      },
      {
        source: "/blog/",
        destination: `${blogURL}/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `${blogURL}/blog/:path+`,
      },
      {
        source: "/blog-static/_next/:path+",
        destination: `${blogURL}/blog-static/_next/:path+`,
      },
      {
        source: "/blog-live-editor",
        destination: `${blogURL}/admin/index.html`,
      },
      {
        source: "/blog-live-editor/:path*",
        destination: `${blogURL}/admin/index.html/#/~/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
