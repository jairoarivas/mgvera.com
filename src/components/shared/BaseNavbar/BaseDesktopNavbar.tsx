import React from "react";
import { Button } from "../Button/Button";
import { BaseNavbarProps, NavbarLinkItem } from "./BaseNavbar";
import styles from "./BaseNavbar.module.css";

function getItemKey(item: NavbarLinkItem) {
    return `${item.label}-${item.href ?? "group"}`
}

export function BaseDesktopNavbar({
    menuItems,
    primaryCta,
    logoSprite,
    logoHref = "#hero",
}: BaseNavbarProps) {
    const [openItemKey, setOpenItemKey] = React.useState<string | null>(null);
    const navRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        function handlePointerDown(event: MouseEvent) {
            if (!navRef.current?.contains(event.target as Node)) {
                setOpenItemKey(null);
            }
        }

        document.addEventListener("mousedown", handlePointerDown);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
        };
    }, []);

    return (
        <nav className={styles.desktopRoot} ref={navRef}>
            <div className={styles.inner}>
                <a className={styles.brandLink} href={logoHref}>
                    <svg className={styles.brandLogo}>
                        <use href={logoSprite} />
                    </svg>
                </a>

                <div className={styles.menu}>
                    <ul className={styles.menuList}>
                        {menuItems.map(item => {
                            const itemKey = getItemKey(item);
                            const hasChildren = Boolean(item.items?.length);
                            const isOpen = openItemKey === itemKey;

                            return (
                            <li
                                className={styles.menuItem}
                                data-has-children={hasChildren ? "true" : "false"}
                                data-open={isOpen ? "true" : "false"}
                                key={itemKey}
                            >
                                {hasChildren ? (
                                    <button
                                        type="button"
                                        className={styles.menuTrigger}
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenItemKey(isOpen ? null : itemKey)}
                                    >
                                        {item.label}
                                        <svg className={styles.menuTriggerIcon}>
                                            <use href={isOpen ? "#chevron-up" : "#chevron-down"} />
                                        </svg>
                                    </button>
                                ) : item.href ? (
                                    <a className={styles.menuLink} href={item.href}>
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className={styles.menuLink}>{item.label}</span>
                                )}

                                {item.items?.length ? (
                                    <ul className={styles.dropdownMenu}>
                                        {item.items.map((child) => (
                                            <li className={styles.dropdownMenuItem} key={getItemKey(child)}>
                                                <a
                                                    className={styles.dropdownMenuLink}
                                                    href={child.href}
                                                    onClick={() => setOpenItemKey(null)}
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
