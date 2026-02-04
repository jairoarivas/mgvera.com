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
                            <h2 className={styles.footerTopHeading}>Get started today</h2>
                        </div>
                        <div className={styles.footerTopColSm}>
                            <Button 
                                label={"Call Now"} 
                                href={""}
                                icon={"#phone"}
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
                            <use href="#logo-longs" />
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
                                <h3>Miami Office</h3>
                                <address>
                                    <span>13960 SW 47 Street, Suite 4404</span>
                                    <span>Miami, Florida  33175</span>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Jupiter Office</h3>
                                <address>
                                    <span>1562 Park Lane South, Suite 400</span>
                                    <span>Jupiter, Florida  33458</span>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Orlando Office</h3>
                                <address>
                                    <span>1414 Lexington Green Lane</span>
                                    <span>Sanford, Florida  32771</span>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerMenuBox}>
                        <div className={styles.footerMenuTopLine}></div>
                        <ul className={styles.footerMenuList}>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Surveying</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Utility Coordination</a>
                            </li>
                            <li className={styles.footerMenuListItem}>
                                <a className={styles.footerMenuLink}>Data Collection</a>
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
