import { BaseNavbar } from "./shared/BaseNavbar/BaseNavbar";
import { useNavbarScrolled } from "./hooks/useNavbarScrolled";
import { useLocation } from "react-router-dom";

type NavbarContent = {
    primaryCta: { label: string; href: string }
    menuItems: {
        label: string
        href?: string
        items?: {
            label: string
            href?: string
        }[]
    }[]
}

export function InteriorNavbar({ content }: { content: NavbarContent }) {
    const { pathname } = useLocation();
    const usesTransparentHeader = pathname === "/news";
    const usesMutedHeader = pathname.startsWith("/news/") || pathname === "/our-legacy";
    const scrolled = useNavbarScrolled();

    return (
        <BaseNavbar
            menuItems={content.menuItems}
            primaryCta={content.primaryCta}
            logoSprite="#logo-full"
            logoHref="/"
            scrolled={usesTransparentHeader || usesMutedHeader ? scrolled : false}
            logoVisible={true}
            logoInteractive={true}
            startTransparent={usesTransparentHeader}
            startMuted={usesMutedHeader}
        />
    )
}
