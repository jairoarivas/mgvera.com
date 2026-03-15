import React from "react";
import { Button } from "../Button/Button";
import { BaseNavbarProps } from "./BaseNavbar";
import styles from "./BaseNavbar.module.css";

export function BaseMobileNavbar({
    menuItems,
    primaryCta,
    logoSprite,
    logoHref = "#hero",
}: BaseNavbarProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <nav className={styles.mobileRoot}>
                <div className={styles.inner}>
                    <a className={styles.brandLink} href={logoHref}>
                        <svg className={styles.brandLogo}>
                            <use href={logoSprite} />
                        </svg>
                    </a>

                    <button
                        type="button"
                        className={styles.menuButton}
                        onClick={() => setOpen(true)}
                    >
                        <svg className={styles.menuButtonIcon}>
                            <use href="#menu" />
                        </svg>   
                    </button>
                </div>
            </nav>

            {open ? (
                <div className={styles.overlay}>
                    <div className={styles.overlayBar}>
                        <a 
                            className={styles.brandLink} 
                            href={logoHref} 
                            onClick={() => setOpen(false)}
                        >
                            <svg className={styles.brandLogo}>
                                <use href={logoSprite} />
                            </svg>
                        </a>

                        <button
                            type="button"
                            className={styles.menuButton}
                            onClick={() => setOpen(false)}
                        >
                            <svg className={styles.menuButtonIcon}>
                                <use href="#x" />
                            </svg>
                        </button>
                    </div>
                    <div className={styles.overlayContent}>
                        <ul className={styles.overlayMenuList}>
                            {menuItems.map((item) => (
                                <li className={styles.overlayMenuListItem} key={item.label}>
                                    <a
                                        href={item.href}
                                        className={styles.overlayMenuLink}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.overlayActions}>
                            <Button
                                label={primaryCta.label}
                                href={primaryCta.href}
                                className={styles.mobilePrimaryCta}
                                onClick={() => setOpen(false)}
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
