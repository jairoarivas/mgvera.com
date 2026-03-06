import styles from "./SocialProof.module.css";

type SocialProofContent = {
    heading: string;
    logoFileNames: string[];
}

export function SocialProof({content} : {content: SocialProofContent}){
    return(
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.headerWrapper}>
                        <h4>{content.heading}</h4>
                    </div>
                    <div className={styles.grid}>
                        {content.logoFileNames.map((logo, index) => {
                            return (
                                <div className={styles.gridItem} key={index}>
                                    <div className={styles.logoCard}>
                                        <img
                                            src={`/images/social-proof-logos/${logo}.svg`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}