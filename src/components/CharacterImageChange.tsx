'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ImagemResponsiva({data}: any) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 825px)')

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <Image
      id="character-image"
      priority
      className={`star${data.rarity}`}
      src={isMobile ? `/images/${data.images.filename_icon}.png` : `/images/${data.name}.png`}
      alt="Imagem Responsiva"
      width={513}
      height={513}
    />
  )
}