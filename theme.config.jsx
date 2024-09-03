import React from 'react'

export default {
  logo: (
    <>
      <span>軟式網球入門指南</span>
    </>
  ),
  project: {
    link: 'https://github.com/txs/soft-tennis-handbook'
  },
  docsRepositoryBase: 'https://github.com/txs/soft-tennis-handbook/blob/main',
  titleSuffix: ' – 軟式網球入門指南',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `© ${new Date().getFullYear()} Andy Soft Tennis Book`,
  footerEditLink: `在 GitHub 上編輯此頁面`,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="軟式網球入門指南：學習軟式網球的完整資源" />
      <meta name="og:title" content="軟式網球入門指南" />
    </>
  )
}
