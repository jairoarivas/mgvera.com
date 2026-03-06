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
                    <h3>40+</h3>
                    <h4>Years of Professional and Senior Personnel Experience</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>8</h3>
                    <h4>Licensed Surveyors (PSM)</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>19</h3>
                    <h4>Fully Equipped Field Crews</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>2</h3>
                    <h4>Vac Trucks (SUE)</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>250+</h3>
                    <h4>Corporate & Municipal Clients</h4>
                </div>
                <div className={styles.statGridItem}>
                    <h3>200+</h3>
                    <h4>Projects Delivered Every Year</h4>
                </div>
            </div>
        </section>
    );
}