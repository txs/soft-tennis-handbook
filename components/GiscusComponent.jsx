import React, { useState, useEffect } from 'react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const GiscusComponent = () => {
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  const [key, setKey] = useState(0)

  useEffect(() => {
    // This effect will run on route changes
    setKey(prevKey => prevKey + 1)
  }, [router.asPath])

  return (
    <Giscus
      key={key}
      repo="txs/soft-tennis-handbook"
      repoId="R_kgDOMsWGjA"
      category="Announcements"
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
