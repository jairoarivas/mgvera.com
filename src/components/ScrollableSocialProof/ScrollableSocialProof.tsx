import styles from "./ScrollableSocialProof.module.css";

type ScrollableSocialProofProps = {
    heading: string;
    logoFileNames: string[];
};

export function ScrollableSocialProof({ heading, logoFileNames }: ScrollableSocialProofProps) {
    return (
        <section className={styles.socialProof} aria-label="Selected client and partner logos">
            <p className={styles.socialProofHeading}>{heading}</p>
            <div className={styles.logoStrip}>
                {logoFileNames.map((logo) => (
                    <div className={styles.logoItem} key={logo}>
                        <img
                            src={`/images/social-proof-logos/${logo}.svg`}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
