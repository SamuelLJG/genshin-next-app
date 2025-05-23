'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function JoinAdsHead() {
  const pathname = usePathname()

  useEffect(() => {
    // Remove script anterior (se houver)
    const existingScript = document.getElementById('joinads-script')
    if (existingScript) {
      existingScript.remove()
    }

    // Cria novo script
    const script = document.createElement('script')
    script.src = 'https://script.joinads.me/myad21872.js'
    script.type = 'module'
    script.crossOrigin = 'anonymous'
    script.async = true
    script.id = 'joinads-script'

    document.body.appendChild(script)

    // Cleanup opcional
    return () => {
      script.remove()
    }
  }, [pathname]) // Reexecuta sempre que mudar de rota

  return null
}