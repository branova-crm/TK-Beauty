'use client';

import { useState, useEffect, useCallback, type CSSProperties, type ReactNode } from 'react';

interface ConsentGateProps {
  embeddingId?: string;
  nameIncludes?: string;
  placeholder?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function ConsentGate({
  embeddingId,
  nameIncludes,
  placeholder,
  children,
  className,
  style,
}: ConsentGateProps) {
  const [hasConsent, setHasConsent] = useState(false);

  const checkConsent = useCallback(() => {
    const win = window as any;
    if (win.CCM?.fullConsentGiven) {
      setHasConsent(true);
      return;
    }
    const accepted = (win.CCM?.acceptedEmbeddings || []) as Array<{ id: string; name: string }>;
    const needle = (nameIncludes || '').toLowerCase();
    const found = accepted.some(
      (e) =>
        (embeddingId && e.id === embeddingId) ||
        (needle && e.name?.toLowerCase().includes(needle)),
    );
    setHasConsent(found);
  }, [embeddingId, nameIncludes]);

  useEffect(() => {
    checkConsent();
    const onClosed = () => setTimeout(checkConsent, 100);
    window.addEventListener('ccm19WidgetClosed', onClosed);
    window.addEventListener('ccm19WidgetLoaded', checkConsent);
    const interval = setInterval(checkConsent, 2000);
    return () => {
      window.removeEventListener('ccm19WidgetClosed', onClosed);
      window.removeEventListener('ccm19WidgetLoaded', checkConsent);
      clearInterval(interval);
    };
  }, [checkConsent]);

  if (hasConsent) return <>{children}</>;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAF8F5',
        borderRadius: '24px',
        padding: '2rem',
        textAlign: 'center',
        minHeight: '240px',
        ...style,
      }}
    >
      {placeholder || (
        <>
          <p style={{ color: '#554837', margin: '0 0 1rem', fontSize: '0.95rem', maxWidth: '400px' }}>
            Dieser Inhalt wird von einem externen Anbieter bereitgestellt. Bitte akzeptieren Sie die
            Cookie-Einstellungen, um den Inhalt anzuzeigen.
          </p>
          <button
            type="button"
            onClick={() => {
              const win = window as any;
              win.CCM?.openWidget?.();
            }}
            style={{
              background: '#554734',
              color: '#fff',
              border: 'none',
              padding: '0.65rem 1.5rem',
              borderRadius: '999px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Cookie-Einstellungen öffnen
          </button>
        </>
      )}
    </div>
  );
}
