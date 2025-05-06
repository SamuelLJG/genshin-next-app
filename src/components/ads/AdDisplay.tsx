"use client";
import { useEffect } from "react";

export default function AdDisplay() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Erro ao carregar anúncio:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1999593447203691"
      data-ad-slot="5225041946"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}