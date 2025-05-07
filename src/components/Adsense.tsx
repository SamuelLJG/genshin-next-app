'use client';

import { useEffect } from 'react';

export default function Adsense() {

  useEffect(() => {
    const initializeAds = () => {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (error: any) {
          console.log(error.message);
        }
      }
    };

    initializeAds();

  }, []);

  return (
    <div className='adbox'>
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