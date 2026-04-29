import {
    ArticleCtaBox,
    ArticleLayout,
    ArticleTextBlock,
    RelatedLinks,
} from "../components/shared/ArticleLayout/ArticleLayout";

type LegacyPageProps = {
  name: string;
  subheading: string;
  cta: {
    label: string;
    href: string;
  };
};

export function LegacyPage(props: LegacyPageProps) {
    return (
        <ArticleLayout
            image={{
                avifSrcSet: "/images/about/history-480.avif 480w, /images/about/history-960.avif 960w, /images/about/history-1440.avif 1440w",
                webpSrcSet: "/images/about/history-480.webp 480w, /images/about/history-960.webp 960w, /images/about/history-1440.webp 1440w",
                fallbackJpg: "/images/about/history.jpg",
                alt: "Historic M.G. Vera surveying image",
                position: "0% 50%",
            }}
            eyebrow="Our Story"
            title={props.name}
            lede={props.subheading}
            sidebar={
                <>
                    <ArticleCtaBox
                        eyebrow="Work With Us"
                        heading="Carry the legacy forward with the right team."
                        body="Talk with MG Vera about surveying, mapping, utility, and field support for your next project."
                        button={props.cta}
                    />
                    <RelatedLinks
                        eyebrow="Explore More"
                        links={[
                            {
                                eyebrow: "People",
                                label: "Meet the team carrying the work forward",
                                href: "/meet-the-team",
                            },
                            {
                                eyebrow: "Updates",
                                label: "Read recent stories and company news",
                                href: "/news",
                            },
                        ]}
                    />
                </>
            }
        >
            <ArticleTextBlock heading="Built on Discipline">
                <p>
                    Manuel G. Vera & Associates was built on a foundation of discipline,
                    technical precision, and long-term trust. What began as a family-led
                    surveying practice grew through decades of consistent work, strong
                    client relationships, and a reputation for doing the job the right way.
                    That steady approach helped shape the company into a lasting presence in
                    Florida&apos;s surveying and mapping industry.
                </p>
            </ArticleTextBlock>
            <ArticleTextBlock heading="Growing with Florida">
                <p>
                    Over the years, the firm expanded its capabilities to meet the changing
                    needs of infrastructure, transportation, utility, and private-sector
                    projects across the state. As the industry evolved, MGV grew with it,
                    adding experienced professionals, investing in technology, and extending
                    its services beyond traditional surveying while holding onto the values
                    that made the company respected in the first place.
                </p>
            </ArticleTextBlock>
            <ArticleTextBlock heading="A Legacy Still Unfolding">
                <p>
                    The legacy of the company is not only in the projects completed, but in
                    the culture behind them: family leadership, accountability, and pride in
                    field-tested expertise. This page will continue to grow into a fuller
                    history of the firm, highlighting key milestones, people, and moments
                    that shaped MGV over time.
                </p>
            </ArticleTextBlock>
        </ArticleLayout>
    );
}
