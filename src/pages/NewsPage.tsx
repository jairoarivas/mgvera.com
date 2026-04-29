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
    const visibleArticles = showAllArticles
        ? newsContent.articles
        : newsContent.articles.slice(0, INITIAL_VISIBLE_ARTICLES);
    const hasMoreArticles = newsContent.articles.length > INITIAL_VISIBLE_ARTICLES;

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
                    <a className={styles.heroFeature} href={newsContent.feature.href}>
                        <div className={styles.heroFeatureText}>
                            <div className={styles.heroMeta}>
                                <p className={styles.heroFeatureDate}>{newsContent.feature.date}</p>
                            </div>
                            <h2 className={styles.heroFeatureTitle}>{newsContent.feature.title}</h2>
                            <span className={styles.heroFeatureLink}>
                                <span>Read More</span>
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
                            <h3 className={styles.panelTitle}>A growing archive of updates from the field and office</h3>
                        </div>

                        <div className={styles.cardGrid}>
                            {visibleArticles.map((article) => (
                                <article className={styles.card} key={`${article.date}-${article.title}`}>
                                    <a className={styles.cardLinkWrap} href={article.href}>
                                        <div
                                            className={styles.cardImage}
                                            style={{ backgroundImage: `url(${article.image})` }}
                                        />
                                        <div className={styles.cardContent}>
                                            <p className={styles.cardEyebrow}>{article.date}</p>

                                            <h4>{article.title}</h4>

                                            <span className={styles.cardLink}>
                                                Read More
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
