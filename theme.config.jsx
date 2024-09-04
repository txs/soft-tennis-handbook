import React from 'react'

export default {
  logo: (
    <>
      <span>軟式網球入門指南 Intro to Soft Tennis</span>
    </>
  ),
  project: {
    link: 'https://github.com/txs/soft-tennis-handbook'
  },
  docsRepositoryBase: 'https://github.com/txs/soft-tennis-handbook/blob/main',
  titleSuffix: ' – 軟式網球入門指南 Intro to Soft Tennis',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `© ${new Date().getFullYear()} Andy's Intro to Soft Tennis Handbook 101`,
  footerEditLink: `在 GitHub 上編輯此頁面`,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 軟式網球入門指南 Intro to Soft Tennis 101 Handbook',
      description: '軟式網球入門指南：學習技巧、策略和規則。適合初學者到中級玩家的完整資源。提升你的軟網技能！ | Soft Tennis Handbook: Learn techniques, strategies, and rules. Complete guide for beginners to intermediate players. Improve your soft tennis skills!',
      openGraph: {
        type: 'website',
        locale: 'zh_TW',
        url: 'http://txs.github.io/soft-tennis-handbook/',
        site_name: '軟式網球入門指南 Intro to Soft Tennis 101 Handbook',
        images: [
          {
            url: 'https://yt3.googleusercontent.com/YaI6jfnglkpz-49wHtyjcgzBJc1MAO1OFOp9WRhx8wV2kctDnDnsgB_tIgbc62JYnhAX8JWZyoA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
            width: 1707,
            height: 282,
            alt: '軟式網球入門指南 Intro to Soft Tennis 101 Handbook',
          }
        ],
      },
      twitter: {
        handle: '@txshon',
        site: '@txshon',
        cardType: 'summary_large_image',
      },
    }
  }
}
