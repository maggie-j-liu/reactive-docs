const withMDX = require("@next/mdx")();
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx"],
});
