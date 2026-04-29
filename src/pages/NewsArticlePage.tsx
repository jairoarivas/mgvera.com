import { useParams } from "react-router-dom";
import { Button } from "../components/shared/Button/Button";
import { Spacer } from "../components/shared/Spacer/Spacer";
import {
    ArticleCtaBox,
    ArticleLayout,
    RelatedLinks,
} from "../components/shared/ArticleLayout/ArticleLayout";
import newsContent from "../docs/news.json";
import styles from "./NewsArticlePage.module.css";

const allArticles = [newsContent.feature, ...newsContent.articles];

export function NewsArticlePage() {
    const { slug } = useParams();
    const article = allArticles.find((item) => item.slug === slug);
    const relatedArticles = allArticles
        .filter((item) => item.slug !== slug)
        .slice(0, 2);

    if (!article) {
        return (
            <>
                <Spacer />
                <main className={styles.notFound}>
                    <p className={styles.eyebrow}>News</p>
                    <h1>Article not found</h1>
                    <Button label="Back to News" href="/news" size="lg" />
                </main>
            </>
        );
    }

    return (
        <ArticleLayout
            image={{
                avifSrcSet: article.imageAvifSrcSet,
                webpSrcSet: article.imageWebpSrcSet,
                fallbackJpg: article.image,
                alt: article.imageAlt,
                position: article.imagePosition,
            }}
            eyebrow={article.date}
            title={article.title}
            byline={{
                initials: "MG",
                name: article.author,
                title: article.authorTitle,
            }}
            sidebar={
                <>
                    <ArticleCtaBox
                        eyebrow="Start a Conversation"
                        heading="Have a project MG Vera can support?"
                        body="Connect with the team to discuss surveying, mapping, utility, or field support needs."
                        button={{ label: "Get in Touch", href: "mailto:cbustos@mgvera.com" }}
                    />
                    <RelatedLinks
                        eyebrow="More News"
                        links={relatedArticles.map((item) => ({
                            eyebrow: item.date,
                            label: item.title,
                            href: item.href,
                        }))}
                    />
                </>
            }
        >
            {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </ArticleLayout>
    );
}
