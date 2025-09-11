'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ForceFullReloadLinks() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Erro ao recarregar ads", err);
    }
  }, [pathname]);

  return null;
}