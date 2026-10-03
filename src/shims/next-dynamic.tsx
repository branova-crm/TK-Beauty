import { Suspense, lazy, useMemo } from 'react';
import type { ReactNode, ComponentType } from 'react';

type DynamicOptions = {
  ssr?: boolean;
  loading?: () => ReactNode;
};

/** Drop-in Ersatz für next/dynamic (React.lazy). */
export default function dynamic(
  loader: () => Promise<{ default: ComponentType<any> } | ComponentType<any>>,
  options: DynamicOptions = {},
) {
  const LazyComp = lazy(async () => {
    const mod: any = await loader();
    if (mod && typeof mod === 'object' && 'default' in mod) return mod;
    return { default: mod };
  });

  function DynamicComponent(props: any) {
    const fallback = useMemo(() => (options.loading ? options.loading() : null), []);
    return (
      <Suspense fallback={fallback}>
        <LazyComp {...props} />
      </Suspense>
    );
  }

  DynamicComponent.displayName = 'NextDynamicShim';
  return DynamicComponent;
}
