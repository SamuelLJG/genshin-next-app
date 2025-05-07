'use client';

// components/AdsenseAd.js
import { useEffect, useRef } from "react";

export default function AdsenseAd() {
  const adRef = useRef(null);

  useEffect(() => {
    const attemptAdLoad = () => {
      try {
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error("Erro ao tentar carregar o anúncio:", e);
      }
    };

    // Aguarda um pequeno tempo para garantir que o <ins> esteja no DOM
    const timeout = setTimeout(attemptAdLoad, 100); // pode ajustar para 200ms se necessário

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="adbox">
      <ins
        ref={adRef}
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