import React from 'react';
import manifest from '../data/image-manifest.json';

type Props = {
  name: string; // base name as in manifest keys (e.g., hero-electrical-infrastructure)
  alt: string;
  className?: string;
  sizes?: string; // e.g. "(max-width: 600px) 100vw, 50vw"
  style?: React.CSSProperties;
};

export default function ResponsiveImage({ name, alt, className, sizes, style }: Props) {
  // fallback: if manifest missing or entry missing, use a safe path to /images/{name}.jpg
  const entry = (manifest as any)[name];

  if (!entry) {
    const fallback = `/images/${name}.jpg`;
    return <img src={fallback} alt={alt} className={className} style={style} loading="lazy" />;
  }

  const avifSrcSet = entry.sources?.avif?.join(', ');
  const webpSrcSet = entry.sources?.webp?.join(', ');
  const jpgSrcSet = entry.sources?.jpg?.join(', ');

  return (
    <picture>
      {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img src={entry.sources?.jpg ? entry.sources.jpg[0].split(' ')[0] : `/images/${name}.jpg`} alt={alt} className={className} style={style} loading="lazy" />
    </picture>
  );
}
