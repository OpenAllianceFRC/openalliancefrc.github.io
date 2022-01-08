/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui"]);
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTM({
  reactStrictMode: true,
  assetPrefix: isProd ? '/openalliancefrc.github.io/' : ''
})
