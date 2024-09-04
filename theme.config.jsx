import React from 'react'
import GiscusComponent from './components/GiscusComponent'

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
  titleSuffix: ' – 軟式網球入門指南 Intro to Soft Tennis @AndysTV YouTube',
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
  chat: {
    link: 'https://www.youtube.com/@AndysTV',
    icon: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="red" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </>
    )
  },
  toc: {
    float: true,
    backToTop: true,
    extraContent: GiscusComponent
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 軟式網球入門指南 @AndysTV YouTube',
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
