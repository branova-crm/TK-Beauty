import { useEffect, useState } from 'react';

/** Drop-in Ersatz für next/navigation usePathname. */
export function usePathname(): string {
  const [pathname, setPathname] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/',
  );

  useEffect(() => {
    const sync = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  return pathname;
}

/** Drop-in Ersatz für next/navigation useRouter. */
export function useRouter() {
  return {
    push(href: string) {
      window.location.assign(href);
    },
    replace(href: string) {
      window.location.replace(href);
    },
    back() {
      window.history.back();
    },
    prefetch() {
      /* no-op */
    },
  };
}
