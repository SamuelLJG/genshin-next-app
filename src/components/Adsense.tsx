'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Adsense() {
  const pathname = usePathname();
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adBox = adRef.current?.querySelector('ins.adsbygoogle') as HTMLElement | null;

    if (!adBox) return;

    // Evita push duplo
    const isProcessed = adBox.getAttribute('data-adsbygoogle-status') === 'done';
    if (!isProcessed) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsense error:', e);
      }
    }
  }, [pathname]);

  return (
    <div className='adbox' ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1999593447203691"
        data-ad-slot="5225041946"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}