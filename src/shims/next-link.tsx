import type { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
  replace?: boolean;
  prefetch?: boolean;
  scroll?: boolean;
};

/** Drop-in Ersatz für next/link. */
export default function Link({ href, children, className, style, onClick, target, rel, ...rest }: LinkProps) {
  void rest.replace;
  void rest.prefetch;
  void rest.scroll;

  return (
    <a href={href} className={className} style={style} onClick={onClick} target={target} rel={rel}>
      {children}
    </a>
  );
}
