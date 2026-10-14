/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `next build` writes plain files to out/, deployed to GitHub Pages
  // by .github/workflows/deploy.yml.
  output: "export",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors!
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
