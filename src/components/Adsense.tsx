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
    <ins className="adsbygoogle"
         style={{ display:'inline-block',width:'728px',height:'90px' }}
         data-ad-client="ca-pub-1999593447203691"
         data-ad-slot= '8942974229'
         data-ad-format={adFormat}
         data-ad-layout={adLayout}></ins>
  );
};

export default AdComponent;