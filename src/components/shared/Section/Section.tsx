import styles from "./Section.module.css";

export function Section ({children, first}:{children: React.ReactNode, first?: boolean}){
    return(
        <section className={`${styles.section} ${first ? styles.firstSection : ""}`}>
            <div className={styles.root}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </section>
    );
}