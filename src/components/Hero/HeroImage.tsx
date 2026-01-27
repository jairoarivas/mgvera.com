type HeroImageProps = {
    avifSrcSet: string;
    webpSrcSet: string;
    fallbackJpg: string;
    sizes?: string;
    position?: string;
    alt?: string;
};

export function HeroImage({
    alt,
    avifSrcSet,
    webpSrcSet,
    fallbackJpg,
    sizes = "100vw",
    position = "50% 50%",
}: HeroImageProps) {
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
                style={{ objectPosition: position }}
            />
        </picture>
    );
}