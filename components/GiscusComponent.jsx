import React from 'react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

const GiscusComponent = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Giscus
      repo="txs/soft-tennis-handbook"
      repoId="R_kgDOMsWGjA"
      category="Comments"
      categoryId="DIC_kwDOMsWGjM4CiLWA"
      mapping="og:title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      lang="zh-TW"
      loading="lazy"
    />
  )
}

export default GiscusComponent
