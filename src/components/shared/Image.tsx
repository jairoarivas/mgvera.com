import type { CSSProperties } from "react";

type ImageProps = {
    alt?: string;
    avifSrcSet: string;
    webpSrcSet: string;
    fallbackJpg: string;
    sizes: string;
    position?: string;
    className?: string;
    style?: CSSProperties;
};

export function Image({
    alt,
    avifSrcSet,
    webpSrcSet,
    fallbackJpg,
    sizes,
    position = "50% 50%",
    className,
    style,
}: ImageProps) {
    return (
        <picture>
            <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
            <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
            <img
                src={fallbackJpg}
                alt={alt ?? ""}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ ...style, objectPosition: position }}
                className={className}
            />
        </picture>
    );
}
