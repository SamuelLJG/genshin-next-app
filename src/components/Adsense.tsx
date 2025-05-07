'use client'

import React, { useEffect } from 'react';

interface AdComponentProps {
  adFormat?: string;
  adLayout?: string;
}

const AdComponent: React.FC<AdComponentProps> = ({adFormat = 'horizontal', adLayout = '' }) => {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{display:'inline-block',width:'970px',height:'90px'}}
         data-ad-client="ca-pub-1999593447203691"
         data-ad-slot='2646193026'
         data-ad-format={adFormat}
         data-ad-layout={adLayout}
         ></ins>
  );
};

export default AdComponent;