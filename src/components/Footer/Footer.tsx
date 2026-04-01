import { Button } from "../shared/Button/Button";
import { Section } from "../shared/Section/Section";
import styles from "./Footer.module.css";

type FooterLink = {
    label: string;
    href: string;
};

type FooterAddress = {
    href: string;
    lines: string[];
};

type FooterLocation = {
    name: string;
    phone?: FooterLink;
    email?: FooterLink;
    address?: FooterAddress;
    placeholder?: string;
};

type FooterSocialLink = FooterLink & {
    icon: string;
};

type FooterContent = {
    topCta: {
        heading: string;
        button: FooterLink;
    };
    locationsIntro: string;
    locations: FooterLocation[];
    menuItems: FooterLink[];
    socialLinks: FooterSocialLink[];
    credit: FooterLink;
    copyright: string;
};

export function Footer({content}: {content: FooterContent}) {
    return (
        <Section className={styles.root}>
            <div>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopRow}>
                        <div className={styles.footerTopColBg}>
                            <h2 className={styles.footerTopHeading}>{content.topCta.heading}</h2>
                        </div>
                        <div className={styles.footerTopColSm}>
                            <Button 
                                label={content.topCta.button.label} 
                                href={content.topCta.button.href}
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
                                {content.locationsIntro}
                            </p>
                        </div>
                        {content.locations.map((location) => (
                            <div className={styles.locationsBox} key={location.name}>
                                <div className={styles.locationCard}>
                                    <h3>{location.name}</h3>
                                    <address>
                                        {location.phone ? (
                                            <a className={styles.phoneLine} href={location.phone.href}>
                                                <svg className={styles.phoneIcon}>
                                                    <use href="#phone"/>
                                                </svg>
                                                {location.phone.label}
                                            </a>
                                        ) : null}
                                        {location.email ? (
                                            <a className={styles.emailLine} href={location.email.href}>
                                                <svg className={styles.emailIcon}>
                                                    <use href="#email" />
                                                </svg>
                                                {location.email.label}
                                            </a>
                                        ) : null}
                                        {location.address ? (
                                            <a
                                                className={styles.addressLink}
                                                href={location.address.href}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span className={styles.addressLine}>
                                                    <svg className={styles.mapPinIcon}>
                                                        <use href="#location-pin" />
                                                    </svg>
                                                    {location.address.lines[0]}
                                                </span>
                                                {location.address.lines.slice(1).map((line) => (
                                                    <span className={styles.addressSubline} key={line}>{line}</span>
                                                ))}
                                            </a>
                                        ) : null}
                                        {location.placeholder ? (
                                            <span className={styles.addressLine}>
                                                <svg className={styles.mapPinIcon} aria-hidden="true">
                                                    <use href="#location-pin"/>
                                                </svg>
                                                <span className={styles.phonePlaceholder}>{location.placeholder}</span>
                                            </span>
                                        ) : null}
                                    </address>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.footerMenuBox}>
                        <div className={styles.footerMenuTopLine}></div>
                        <ul className={styles.footerMenuList}>
                            {content.menuItems.map((item) => (
                                <li className={styles.footerMenuListItem} key={item.href}>
                                    <a className={styles.footerMenuLink} href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.footerMenuBottomLine}></div>
                    </div>
                    <div className={styles.copyrightBox}>
                        <div className={styles.copyright}>
                            <p>{content.copyright}</p>
                        </div>
                        <div className={styles.socialLinks}>
                            {content.socialLinks.map((link) => (
                                <a
                                    className={styles.socialLink}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={link.label}
                                    key={link.href}
                                >
                                    <svg className={styles.socialIcon}>
                                        <use href={link.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                        <div className={styles.credLink}>
                            <a href={content.credit.href || undefined}>{content.credit.label}</a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
