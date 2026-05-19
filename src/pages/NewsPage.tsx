import { useState } from "react";
import { Button } from "../components/shared/Button/Button";
import { Image } from "../components/shared/Image";
import { Section } from "../components/shared/Section/Section";
import newsContent from "../docs/news.json";
import styles from "./NewsPage.module.css";

type NewsPageProps = {
  name: string;
  subheading: string;
  cta: {
    label: string;
    href: string;
  };
};

const INITIAL_VISIBLE_ARTICLES = 3;

export function NewsPage(props: NewsPageProps) {
    const [showAllArticles, setShowAllArticles] = useState(false);
    const articles = [...newsContent.articles].sort(
        (a, b) => new Date(b._date).getTime() - new Date(a._date).getTime(),
    );
    const visibleArticles = showAllArticles
        ? articles
        : articles.slice(0, INITIAL_VISIBLE_ARTICLES);
    const hasMoreArticles = articles.length > INITIAL_VISIBLE_ARTICLES;

    return (
        <>
            <section className={styles.hero}>
                <Image
                    className={styles.heroImage}
                    avifSrcSet={newsContent.feature.imageAvifSrcSet}
                    webpSrcSet={newsContent.feature.imageWebpSrcSet}
                    fallbackJpg={newsContent.feature.image}
                    alt={newsContent.feature.imageAlt}
                    sizes="100vw"
                    position={newsContent.feature.imagePosition}
                />
                <div id="nav-sentinel" className={styles.navSentinel} />
                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>News</p>
                        <h1 className={styles.heroTitle}>{props.name}</h1>
                        <p className={styles.heroSubheading}>{props.subheading}</p>
                    </div>

                    <a className={styles.heroFeature} href={newsContent.feature.href} aria-label={`Read more about ${newsContent.feature.title}`}>
                        <span className={styles.featureLabel}>Featured Story</span>
                        <div className={styles.featureBody}>
                            <p className={styles.featureAccent}>{newsContent.feature.authorTitle}</p>
                            <h2 className={styles.heroFeatureTitle}>{newsContent.feature.title}</h2>
                            <p className={styles.heroFeatureSummary}>{newsContent.feature.summary}</p>
                            <span className={styles.textLink}>
                                <span>{newsContent.feature.ctaLabel}</span>
                                <svg className={styles.heroFeatureLinkIcon} aria-hidden="true">
                                    <use href="#chevron-right" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            <Section>
                <div className={styles.layout}>
                    <section className={styles.panel}>
                        <div className={styles.panelHeader}>
                            <p className={styles.eyebrow}>Recent Articles</p>
                        </div>

                        <div className={styles.cardGrid}>
                            {visibleArticles.map((article) => (
                                <article className={styles.card} key={article.slug}>
                                    <a className={styles.cardLinkWrap} href={article.href}>
                                        <div
                                            className={styles.cardImage}
                                            style={{
                                                backgroundImage: `url(${article.image})`,
                                                "--card-image-fit": article.cardImageFit ?? "cover",
                                            } as React.CSSProperties}
                                        />
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardMeta}>
                                                <span>{article.authorTitle}</span>
                                            </div>
                                            <h4>{article.title}</h4>
                                            <p>{article.summary}</p>

                                            <span className={styles.textLink}>
                                                <span>Read More</span>
                                                <svg className={styles.heroFeatureLinkIcon} aria-hidden="true">
                                                    <use href="#chevron-right" />
                                                </svg>
                                            </span>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>

                        {hasMoreArticles && !showAllArticles ? (
                            <div className={styles.actions}>
                                <Button
                                    label="Load More"
                                    href="#"
                                    size="lg"
                                    className={styles.loadMoreButton}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setShowAllArticles(true);
                                    }}
                                />
                            </div>
                        ) : null}
                    </section>
                </div>
            </Section>
        </>
    );
}
