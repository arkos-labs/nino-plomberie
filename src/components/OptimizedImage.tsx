import type { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  /** Images WebP versions (sans extension) */
  srcWebp?: string
}

/**
 * Composant Image optimisé avec WebP + srcset responsive
 * Usage:
 * <OptimizedImage
 *   src="/photos/salle-bain.jpg"
 *   srcWebp="/photos/salle-bain"
 *   alt="Salle de bain rénovée"
 *   width={600}
 *   height={400}
 * />
 */
export function OptimizedImage({
  src,
  srcWebp,
  alt,
  width,
  height,
  className = '',
  ...props
}: OptimizedImageProps) {
  const basePath = src.replace(/\.[^.]+$/, '') // Remove extension

  return (
    <picture>
      {srcWebp && (
        <source
          srcSet={`
            ${srcWebp}-sm.webp 375w,
            ${srcWebp}-md.webp 768w,
            ${srcWebp}.webp 1200w
          `}
          sizes="(max-width: 600px) 100vw, 50vw"
          type="image/webp"
        />
      )}
      <img
        src={src}
        srcSet={srcWebp ? undefined : `
          ${basePath}-sm.jpg 375w,
          ${basePath}-md.jpg 768w,
          ${basePath}.jpg 1200w
        `}
        sizes="(max-width: 600px) 100vw, 50vw"
        alt={alt}
        width={width}
        height={height}
        className={`rounded-lg ${className}`}
        loading="lazy"
        {...props}
      />
    </picture>
  )
}

/**
 * Guide WebP conversion:
 *
 * 1. ImageMagick (CLI gratuit):
 *    convert photo.jpg -quality 80 photo.webp
 *    convert photo.jpg -quality 80 -resize 375x photo-sm.webp
 *    convert photo.jpg -quality 80 -resize 768x photo-md.webp
 *
 * 2. Squoosh.app (gratuit, no install needed):
 *    - Upload JPG
 *    - Export as WebP
 *    - Set quality 80
 *
 * 3. FFmpeg (gratuit):
 *    ffmpeg -i photo.jpg -c:v libwebp -quality 80 photo.webp
 *
 * Après conversion, placer les fichiers dans /public/images/
 * puis utiliser:
 * <OptimizedImage
 *   src="/images/photo.jpg"
 *   srcWebp="/images/photo"
 *   alt="Description"
 * />
 */
