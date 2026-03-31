import { BaseNavbar } from "./shared/BaseNavbar/BaseNavbar";

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
    return (
        <BaseNavbar
            menuItems={content.menuItems}
            primaryCta={content.primaryCta}
            logoSprite="#logo-full"
            logoHref="/"
            scrolled={false}
            logoVisible={true}
            logoInteractive={true}
            startTransparent={false}
        />
    )
}