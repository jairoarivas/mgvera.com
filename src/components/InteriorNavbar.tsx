import { useNavbarScrolled } from "./hooks/useNavbarScrolled"
import { BaseNavbar } from "./shared/BaseNavbar/BaseNavbar";

type NavbarContent = {
  primaryCta: { label: string; href: string }
  menuItems: {
    label: string
    href: string
  }[]
}

export function InteriorNavbar({ content }: { content: NavbarContent }) {
  return (
    <BaseNavbar
      menuItems={content.menuItems}
      primaryCta={content.primaryCta}
      logoSprite="#logo-full"
      logoHref="#hero"
      scrolled={false}
      logoVisible={true}
      logoInteractive={true}
      startTransparent={false}
    />
  )
}