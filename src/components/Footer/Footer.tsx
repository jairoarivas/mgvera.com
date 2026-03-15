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
                                href={"mailto:cbustos@mgvera.com"}
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.logo}>
                        <svg 
                            className={styles.logoSvg} 
                            viewBox="0 0 757.28223 311.3251"
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
                                    <a className={styles.phoneLine} href="tel:3052216210">
                                        <svg className={styles.phoneIcon}>
                                            <use href="#phone"/>
                                        </svg>
                                        (305) 221-6210
                                    </a>
                                    <a className={styles.emailLine} href="mailto:cbustos@mgvera.com">
                                        <svg className={styles.emailIcon}>
                                            <use href="#email" />
                                        </svg>
                                        cbustos@mgvera.com
                                    </a>
                                    <a
                                        className={styles.addressLink}
                                        href="https://www.google.com/maps/search/?api=1&query=13960%20SW%2047%20Street%2C%20Suite%204404%2C%20Miami%2C%20FL%2033175"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className={styles.addressLine}>
                                            <svg className={styles.mapPinIcon}>
                                                <use href="#location-pin" />
                                            </svg>
                                            13960 SW 47 Street
                                        </span>
                                        <span className={styles.addressSubline}>Miami, Florida  33175</span>
                                    </a>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Jupiter</h3>
                                <address>
                                    <a className={styles.phoneLine} href="tel:5612032704">
                                        <svg className={styles.phoneIcon}>
                                            <use href="#phone"/>
                                        </svg>
                                        (561) 203-2704
                                    </a>
                                    <a
                                        className={styles.addressLink}
                                        href="https://www.google.com/maps/search/?api=1&query=1562%20Park%20Lane%20South%2C%20Suite%20400%2C%20Jupiter%2C%20FL%2033458"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className={styles.addressLine}>
                                            <svg className={styles.mapPinIcon}>
                                                <use href="#location-pin" />
                                            </svg>
                                            1562 Park Lane South
                                        </span>
                                        <span className={styles.addressSubline}>Suite 400</span>
                                        <span className={styles.addressSubline}>Jupiter, Florida  33458</span>
                                    </a>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Orlando</h3>
                                <address>
                                    <a className={styles.phoneLine} href="tel:4078785409">
                                        <svg className={styles.phoneIcon}>
                                            <use href="#phone"/>
                                        </svg>
                                        (407) 878-5409
                                    </a>
                                    <a
                                        className={styles.addressLink}
                                        href="https://www.google.com/maps/search/?api=1&query=1414%20Lexington%20Green%20Lane%2C%20Sanford%2C%20FL%2032771"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className={styles.addressLine}>
                                            <svg className={styles.mapPinIcon}>
                                                <use href="#location-pin" />
                                            </svg>
                                            1414 Lexington Green Lane
                                        </span>
                                        <span className={styles.addressSubline}>Sanford, Florida  32771</span>
                                    </a>
                                </address>
                            </div>
                        </div>
                        <div className={styles.locationsBox}>
                            <div className={styles.locationCard}>
                                <h3>Jacksonville</h3>
                                <address>
                                    <span className={styles.addressLine}>
                                        <svg className={styles.mapPinIcon} aria-hidden="true">
                                            <use href="#location-pin"/>
                                        </svg>
                                        <span className={styles.phonePlaceholder}>Coming Soon!</span>
                                    </span>
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
                        <div className={styles.socialLinks}>
                            <a
                                className={styles.socialLink}
                                href="https://www.facebook.com/MGVera.inc/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="M.G. Vera on Facebook"
                            >
                                <svg className={styles.socialIcon}>
                                    <use href="#facebook" />
                                </svg>
                            </a>
                            <a
                                className={styles.socialLink}
                                href="https://www.instagram.com/mgvera_survey/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="M.G. Vera on Instagram"
                            >
                                <svg className={styles.socialIcon}>
                                    <use href="#instagram" />
                                </svg>
                            </a>
                            <a
                                className={styles.socialLink}
                                href="https://www.linkedin.com/company/mgvera"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="M.G. Vera on LinkedIn"
                            >
                                <svg className={styles.socialIcon}>
                                    <use href="#linkedin" />
                                </svg>
                            </a>
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
