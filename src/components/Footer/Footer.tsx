import { Button } from "../shared/Button/Button";
import { Section } from "../shared/Section/Section";
import styles from "./Footer.module.css";

type FooterContent = {}

export function Footer({content}: {content?: FooterContent}) {
    return (
        <Section className={styles.root}>
            <div>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopRow}>
                        <div className={styles.footerTopColBg}>
                            <h2 className={styles.footerTopHeading}>The right team makes a difference</h2>
                        </div>
                        <div className={styles.footerTopColSm}>
                            <Button 
                                label={"Partner With Us"} 
                                href={""}
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.logo}>
                        <svg 
                            className={styles.logoSvg} 
                            viewBox="0 0 620 100"
                        >
                            <use href="#logo-full" />
                        </svg>
                    </div>
                    <div className={styles.locations}>
                        <div className={styles.locationsBox}>
                            <p className={styles.locationText}>
                                Proudly serving Florida statewide.
                            </p>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Miami (Corporate)</h3>
                                <address>
                                    <span>13960 SW 47 Street, Suite 4404</span>
                                    <span>Miami, Florida  33175</span>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Jupiter</h3>
                                <address>
                                    <span>1562 Park Lane South, Suite 400</span>
                                    <span>Jupiter, Florida  33458</span>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Orlando</h3>
                                <address>
                                    <span>1414 Lexington Green Lane</span>
                                    <span>Sanford, Florida  32771</span>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Jacksonville</h3>
                                <address>
                                    <span>Coming Soon</span>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerMenuBox}>
                        <div className={styles.footerMenuTopLine}></div>
                        <ul className={styles.footerMenuList}>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Surveying·Mapping</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>SUE</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>UC</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Lidar</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Construction</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Residential·Commercial</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>About</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Projects</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>News</a>
                            </li>
                        </ul>
                        <div className={styles.footerMenuBottomLine}></div>
                    </div>
                    <div className={styles.copyrightBox}>
                        <div className={styles.copyright}>
                            <p>© M.G. Vera & Associates 2026</p>
                        </div>
                        <div className={styles.credLink}>
                            <a>Site by JR Forge Studios</a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
