'use client';

// components/AdsenseAd.js
import { useEffect } from "react";

export default function AdsenseAd() {

  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <div className="adbox endesc">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1999593447203691"
        data-ad-slot="5225041946"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      </div>
  );
}