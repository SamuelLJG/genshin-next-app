'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}