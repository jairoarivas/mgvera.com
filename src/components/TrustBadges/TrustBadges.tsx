import { SectionTopper } from "../shared/Section/SectionTopper";
import { Section } from "../shared/Section/Section";
import styles from "./TrustBadges.module.css";
import { SectionContent } from "../shared/Section/SectionContent";
import { useNavbarScrolled } from "../hooks/useNavbarScrolled";

export function TrustBadges (){
    const scrolled = useNavbarScrolled();
    
    return(
        <section className={styles.section}>
            <div className={styles.trustLeadIn} data-scrolled={scrolled ? "true" : "false"}>
                <h4>Experience That Moves Projects Forward</h4>
            </div>
            <div className={styles.statGrid} data-scrolled={scrolled ? "true" : "false"}>
                <div className={styles.statGridItem}>
                    <h3>104</h3>
                    <h4>Years of Combined Experience</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>49</h3>
                    <h4>Licensed Surveyors (PSM)</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>7</h3>
                    <h4>Fully Equipped Field Crews</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>51</h3>
                    <h4>Corporate & Municipal Clients</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>238</h3>
                    <h4>Projects Successfully Delivered</h4>
                </div>
            </div>
        </section>
    );
}