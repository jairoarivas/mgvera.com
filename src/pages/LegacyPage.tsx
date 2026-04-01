import { Section } from "../components/shared/Section/Section";
import { Image } from "../components/shared/Image";
import { SectionTopper } from "../components/shared/Section/SectionTopper";
import { Spacer } from "../components/shared/Spacer/Spacer";
import styles from "./LegacyPage.module.css";

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
        <>
            <Spacer />
            <Section>
                <SectionTopper
                    name="about"
                    heading={props.name}
                    subheading={props.subheading}
                    cta={props.cta}
                />
                <div className={styles.layout}>
                    <div className={styles.content}>
                        <section className={styles.block}>
                            <h3 className={styles.subheading}>Built on Discipline</h3>
                            <p>
                                Manuel G. Vera & Associates was built on a foundation of discipline,
                                technical precision, and long-term trust. What began as a family-led
                                surveying practice grew through decades of consistent work, strong
                                client relationships, and a reputation for doing the job the right way.
                                That steady approach helped shape the company into a lasting presence in
                                Florida&apos;s surveying and mapping industry.
                            </p>
                        </section>
                        <section className={styles.block}>
                            <h3 className={styles.subheading}>Growing with Florida</h3>
                            <p>
                                Over the years, the firm expanded its capabilities to meet the changing
                                needs of infrastructure, transportation, utility, and private-sector
                                projects across the state. As the industry evolved, MGV grew with it,
                                adding experienced professionals, investing in technology, and extending
                                its services beyond traditional surveying while holding onto the values
                                that made the company respected in the first place.
                            </p>
                        </section>
                        <section className={styles.block}>
                            <h3 className={styles.subheading}>A Legacy Still Unfolding</h3>
                            <p>
                                The legacy of the company is not only in the projects completed, but in
                                the culture behind them: family leadership, accountability, and pride in
                                field-tested expertise. This page will continue to grow into a fuller
                                history of the firm, highlighting key milestones, people, and moments
                                that shaped MGV over time.
                            </p>
                        </section>
                    </div>
                    <div className={styles.imagePane}>
                        <Image
                            className={styles.image}
                            avifSrcSet="/images/about/history-480.avif 480w, /images/about/history-960.avif 960w, /images/about/history-1440.avif 1440w"
                            webpSrcSet="/images/about/history-480.webp 480w, /images/about/history-960.webp 960w, /images/about/history-1440.webp 1440w"
                            fallbackJpg="/images/about/history.jpg"
                            alt="Historic M.G. Vera surveying image"
                            sizes="(max-width: 899px) 100vw, 50vw"
                            position="0% 50%"
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}
