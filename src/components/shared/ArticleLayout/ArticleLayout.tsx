import type { ReactNode } from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image";
import { useNavbarScrolled } from "../../hooks/useNavbarScrolled";
import styles from "./ArticleLayout.module.css";

type ArticleImage = {
    avifSrcSet: string;
    webpSrcSet: string;
    fallbackJpg: string;
    alt: string;
    position?: string;
};

type ArticleLayoutProps = {
    image: ArticleImage;
    eyebrow: string;
    title: string;
    lede?: string;
    byline?: {
        initials: string;
        name: string;
        title: string;
    };
    children: ReactNode;
    sidebar: ReactNode;
};

type ArticleCtaBoxProps = {
    eyebrow: string;
    heading: string;
    body: string;
    button: {
        label: string;
        href: string;
    };
};

type RelatedLink = {
    label: string;
    eyebrow: string;
    href: string;
};

export function ArticleLayout({
    image,
    eyebrow,
    title,
    lede,
    byline,
    children,
    sidebar,
}: ArticleLayoutProps) {
    return (
        <main className={styles.page}>
            <div id="nav-sentinel" className={styles.navSentinel} />
            <div id="article-cta-sentinel" className={styles.navSentinel} />

            <header className={styles.header}>
                <div className={styles.imageWrap}>
                    <Image
                        className={styles.image}
                        avifSrcSet={image.avifSrcSet}
                        webpSrcSet={image.webpSrcSet}
                        fallbackJpg={image.fallbackJpg}
                        alt={image.alt}
                        sizes="(max-width: 1024px) 100vw, 90rem"
                        position={image.position}
                    />
                </div>

                <div className={styles.headingBlock}>
                    <p className={styles.eyebrow}>{eyebrow}</p>
                    <h1>{title}</h1>
                    {lede ? <p className={styles.lede}>{lede}</p> : null}

                    {byline ? (
                        <div className={styles.byline}>
                            <span className={styles.avatar} aria-hidden="true">
                                {byline.initials}
                            </span>
                            <div>
                                <p className={styles.author}>{byline.name}</p>
                                <p className={styles.authorTitle}>{byline.title}</p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </header>

            <section className={styles.articleSection}>
                <article className={styles.articleBody}>{children}</article>
                <aside className={styles.sidebar}>{sidebar}</aside>
            </section>
        </main>
    );
}

export function ArticleTextBlock({
    heading,
    children,
}: {
    heading: string;
    children: ReactNode;
}) {
    return (
        <section className={styles.block}>
            <h2>{heading}</h2>
            {children}
        </section>
    );
}

export function ArticleCtaBox({ eyebrow, heading, body, button }: ArticleCtaBoxProps) {
    const ctaScrolled = useNavbarScrolled("#article-cta-sentinel");

    return (
        <div className={styles.ctaBox} data-scrolled={ctaScrolled ? "true" : "false"}>
            <p className={styles.ctaEyebrow}>{eyebrow}</p>
            <h2>{heading}</h2>
            <p>{body}</p>
            <Button
                label={button.label}
                href={button.href}
                size="lg"
                className={styles.ctaButton}
            />
        </div>
    );
}

export function RelatedLinks({
    eyebrow,
    links,
}: {
    eyebrow: string;
    links: RelatedLink[];
}) {
    return (
        <div className={styles.related}>
            <p className={styles.ctaEyebrow}>{eyebrow}</p>
            {links.map((link) => (
                <a className={styles.relatedLink} href={link.href} key={`${link.href}-${link.label}`}>
                    <span>{link.eyebrow}</span>
                    {link.label}
                </a>
            ))}
        </div>
    );
}
