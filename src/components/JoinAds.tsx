'use client'

import { usePathname } from 'next/navigation'

export default function JoinAdsHead() {
  const pathname = usePathname()

  return (
    <>
      <div key={`joinads-preload-${pathname}`}
        dangerouslySetInnerHTML={{
          __html: `
            <link rel="preload" href="https://script.joinads.me/myad21872.js" crossorigin="anonymous" as="script">
<script type="module" src="https://script.joinads.me/myad21872.js" crossorigin="anonymous" async></script>
          `,
        }}
      />
    </>
  )
}
