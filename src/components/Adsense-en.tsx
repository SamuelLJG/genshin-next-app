'use client';

import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle adbox endesc"
               style={{display:'block'}}
               data-ad-client="ca-pub-1999593447203691"
               data-ad-slot="8181198147"
               data-ad-format="auto"
               data-full-width-responsive="true"
    />
  );
};
export default AdBanner;