import { Button } from "../Button/Button";
import { BaseNavbarProps } from "./BaseNavbar";
import styles from "./BaseNavbar.module.css";

export function BaseDesktopNavbar({
    menuItems,
    primaryCta,
    logoSprite,
    logoHref = "#hero",
}: BaseNavbarProps) {
    return (
        <nav className={styles.desktopRoot} >
            <div className={styles.inner}>
                <a className={styles.brandLink} href={logoHref}>
                    <svg className={styles.brandLogo}>
                        <use href={logoSprite} />
                    </svg>
                </a>

                <div className={styles.menu}>
                    <ul className={styles.menuList}>
                        {menuItems.map(item => (
                            <li className={styles.menuItem} key={item.href}>
                                <a className={styles.menuLink} href={item.href}>
                                    {item.label}
                                </a>
                            </li>   
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <Button 
                            label={primaryCta.label} 
                            href={primaryCta.href}
                            className={styles.desktopPrimaryCta}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
