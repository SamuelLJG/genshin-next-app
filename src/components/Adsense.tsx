'use client'

import { useEffect } from 'react';

export default function AdComponent(){

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
         style={{display:'inline-block',width:'728px',height:'90px'}}
         data-ad-client="ca-pub-1999593447203691"
         data-ad-slot='4805769734'
         ></ins>
  );


}