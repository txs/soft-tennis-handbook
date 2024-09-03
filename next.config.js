// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   // ... any other existing configurations
// }

// module.exports = nextConfig


const isProd = process.env.NODE_ENV === 'production'
const repoName = 'soft-tennis-handbook' // Replace with your repository name
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
// module.exports = withNextra()

module.exports = withNextra({
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : ''
})
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })