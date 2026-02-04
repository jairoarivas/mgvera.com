import styles from "./Section.module.css";

export function Section ({children, first, className}:{
    children: React.ReactNode, 
    first?: boolean, 
    className?: string
}){
    return(
        <section className={`${styles.section} ${first ? styles.firstSection : ""} ${className ?? ""}`}>
            <div className={styles.root}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </section>
    );
}