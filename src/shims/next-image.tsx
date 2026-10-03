import type { CSSProperties, ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
};

/** Drop-in Ersatz für next/image (Astro/React Islands). */
export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  className,
  style,
  priority,
  sizes,
  ...rest
}: ImageProps) {
  const mergedStyle: CSSProperties = fill
    ? {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: (style as CSSProperties | undefined)?.objectFit || 'cover',
        ...style,
      }
    : { ...style };

  // unused Next-only props
  void priority;
  void sizes;

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={mergedStyle}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...rest}
    />
  );
}
