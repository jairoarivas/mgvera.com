import React from "react";
import { Button } from "../Button/Button";
import { BaseNavbarProps, NavbarLinkItem } from "./BaseNavbar";
import styles from "./BaseNavbar.module.css";

function getItemKey(item: NavbarLinkItem) {
    return `${item.label}-${item.href ?? "group"}`
}

export function BaseMobileNavbar({
    menuItems,
    primaryCta,
    logoSprite,
    logoHref = "#hero",
}: BaseNavbarProps) {
    const [open, setOpen] = React.useState(false);
    const [openItemKey, setOpenItemKey] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!open) {
            return;
        }

        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = overflow;
        };
    }, [open]);

    React.useEffect(() => {
        if (!open) {
            setOpenItemKey(null);
        }
    }, [open]);

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
                            {menuItems.map((item) => {
                                const itemKey = getItemKey(item);
                                const childItems = item.items ?? [];
                                const hasChildren = childItems.length > 0;
                                const isOpen = openItemKey === itemKey;

                                return (
                                <li
                                    className={styles.overlayMenuListItem}
                                    data-open={isOpen ? "true" : "false"}
                                    key={itemKey}
                                >
                                    {hasChildren ? (
                                        <button
                                            type="button"
                                            className={styles.overlayMenuTrigger}
                                            aria-expanded={isOpen}
                                            onClick={() => setOpenItemKey(isOpen ? null : itemKey)}
                                        >
                                            {item.label}
                                            <svg className={styles.overlayMenuTriggerIcon}>
                                                <use href={isOpen ? "#chevron-up" : "#chevron-down"} />
                                            </svg>
                                        </button>
                                    ) : item.href ? (
                                        <a
                                            href={item.href}
                                            className={styles.overlayMenuLink}
                                            onClick={() => setOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <span className={styles.overlayMenuLink}>{item.label}</span>
                                    )}

                                    {hasChildren ? (
                                        <ul className={styles.overlaySubmenuList}>
                                            {childItems.map((child) => (
                                                <li className={styles.overlaySubmenuListItem} key={getItemKey(child)}>
                                                    <a
                                                        href={child.href}
                                                        className={styles.overlaySubmenuLink}
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        {child.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </li>
                                )
                            })}
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
