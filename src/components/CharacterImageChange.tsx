'use client'

import Image from 'next/image'
import { useLayoutEffect, useState } from 'react'
import { formatarParaSlashCase } from '@/app/[id]/page'
interface Props {
  data: {
    name: string
    rarity: number
    images: {
      filename_icon: string,
      filename_iconCard: string
    }
  }
}

export default function ImagemResponsiva({ data }: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 825px)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <>
      <Image
        id="character-image"
        priority
        className={`star${data.rarity}`}
        src={`/images/Icons/${formatarParaSlashCase(data.name)}.png`}
        alt="Imagem Desktop"
        width={256}
        height={256}
        style={{ display: isMobile ? 'none' : 'block' }}
      />
      <Image
        id="character-image"
        priority
        className={`star${data.rarity}`}
        src={`/images/Banners/${formatarParaSlashCase(data.name)}_Card.png`}
        alt="Imagem Mobile"
        width={814}
        height={499}
        style={{ display: isMobile ? 'block' : 'none' }}
      />
      
    </>
  )
}