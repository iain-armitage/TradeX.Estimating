
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function RedirectToOverview() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      router.replace(pathname + '/overview');
    }
  }, [pathname, router]);

  return null;
}
