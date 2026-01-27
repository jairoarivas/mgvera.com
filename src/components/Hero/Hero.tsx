import styles from "./Hero.module.css"; 
import { Button } from "../shared/Button/Button";
import { Video } from "../shared/Video";

type HeroContent = {
    heading: string;
    subheading: string;
    primaryCta: { label: string; href: string; icon: string; };
    videoName: string;
};

export function Hero({ content } : { content: HeroContent }) {
    return (
        <section className={styles.hero} id="hero" data-scroll-target>
            <div className={styles.heroBg}>
                <Video
                    poster={`/videos/${content.videoName}-poster.jpg`}
                    preload="metadata"
                    sources={[
                        { src: `/videos/${content.videoName}-720p.webm`, type: "video/webm" },
                        { src: `/videos/${content.videoName}-720p.mp4`, type: "video/mp4" },
                    ]}
                />
            </div>
            <div id="nav-sentinel" className={styles.navSentinel} />
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.textContentBox}>
                        <div className={styles.textContent}>
                            <h1 className={styles.header}>{content.heading}</h1>
                            <p className={styles.subheading}>{content.subheading}</p>
                            <Button 
                                label={content.primaryCta.label} 
                                href={content.primaryCta.href}
                                icon={`#${content.primaryCta.icon}`}
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}