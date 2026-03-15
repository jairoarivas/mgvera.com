import { BaseDesktopNavbar } from "./BaseDesktopNavbar";
import { BaseMobileNavbar } from "./BaseMobileNavbar";
import styles from "./BaseNavbar.module.css";

export type NavbarLinkItem = {
    label: string
    href: string
}

export type NavbarCta = {
    label: string;
    href: string;
}

export type BaseNavbarProps = {
    menuItems: NavbarLinkItem[]
    primaryCta: NavbarCta
    logoSprite: string
    logoHref?: string
    scrolled?: boolean
    logoVisible?: boolean
    logoInteractive?: boolean
}

export function BaseNavbar({
    scrolled = false,
    logoVisible = true,
    logoInteractive = true,
    ...props
}: BaseNavbarProps) {
  return (
    <div 
        className={styles.root}
        data-scrolled={scrolled ? "true" : "false"}
        data-logo-visible={logoVisible ? "true" : "false"}
        data-logo-interactive={logoInteractive ? "true" : "false"}
    >
      <BaseDesktopNavbar {...props} />
      <BaseMobileNavbar {...props} />
    </div>
  )
}