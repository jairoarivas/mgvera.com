import { useEffect } from "react";
import { useNavbarScrolled } from "../hooks/useNavbarScrolled";
import { Button } from "../shared/Button/Button";
import styles from "./DesktopNavbar.module.css";

type DesktopNavbarContent = {
    logo: string;
    primaryCta: { label: string; href: string };
    menuItems: Array<string>
};

export function DesktopNavbar({content}: {content: DesktopNavbarContent}) {
    const scrolled = useNavbarScrolled();

    return (
        <nav className={styles.nav} data-scrolled={scrolled ? "true" : "false"}>
            <div className={styles.navLayout}>
                <a className={styles.logoLink} href="#hero">
                    <svg className={styles.logo}>
                        <use href="#logo-full" />
                    </svg>
                </a>
                <div className={styles.navMenu}>
                    <ul className={styles.list}>
                        {content.menuItems.map((item)=> {
                            return (
                                <li className={styles.listItem}>
                                    <a className={styles.navLink}>
                                        {item}
                                    </a>
                                </li>   
                            )
                        })}
                    </ul>
                    <div className={styles.ctaBox}>
                        <Button 
                            label={content.primaryCta.label} 
                            href={content.primaryCta.href}
                            className={styles.ctaButton}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}