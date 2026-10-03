import { useEffect } from 'react';

type ScriptProps = {
  id?: string;
  src?: string;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker';
  children?: string;
  onLoad?: () => void;
  onError?: () => void;
  async?: boolean;
  defer?: boolean;
};

/** Drop-in Ersatz für next/script. */
export default function Script({ id, src, strategy, children, onLoad, onError, async, defer }: ScriptProps) {
  useEffect(() => {
    if (!src) {
      if (children && id && !document.getElementById(id)) {
        const el = document.createElement('script');
        el.id = id;
        el.text = children;
        document.body.appendChild(el);
      }
      return;
    }

    if (id && document.getElementById(id)) return;

    const el = document.createElement('script');
    if (id) el.id = id;
    el.src = src;
    el.async = async ?? strategy !== 'beforeInteractive';
    if (defer) el.defer = true;
    if (onLoad) el.onload = onLoad;
    if (onError) el.onerror = onError;
    document.body.appendChild(el);

    return () => {
      // Scripts bewusst nicht entfernen (Tagembed/CCM bleiben)
    };
  }, [id, src, strategy, children, onLoad, onError, async, defer]);

  return null;
}
