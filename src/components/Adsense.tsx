'use client'

import React, { useEffect } from 'react';

interface AdComponentProps {
  adFormat?: string;
  adLayout?: string;
}

const AdComponent: React.FC<AdComponentProps> = ({adFormat = 'auto', adLayout = '' }) => {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <div style={{textAlign: 'center', margin: '0px auto', padding: '0px 20px'}}>
    <ins className="adsbygoogle"
         style={{display:'block'}}
         data-ad-client="ca-pub-1999593447203691"
         data-ad-slot='5225041946'
         data-ad-format={adFormat}
         data-ad-layout={adLayout}
         data-full-width-responsive="true"
         ></ins>
    </div>
  );
};

export default AdComponent;