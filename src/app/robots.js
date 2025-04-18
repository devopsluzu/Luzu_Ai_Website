export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/terms-of-service",
          "/privacy-policy",
          "/cookie-policy",
          "/refund-policy",
        ],
      },
      sitemap: "https://luzu.ai/sitemap.xml",
    };
  }