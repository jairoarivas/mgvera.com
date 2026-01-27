import { NavigationMenu } from "radix-ui";
import styles from "./DesktopMenu.module.css"

export function DesktopMenu(props: {menuItems: Array<string>}) {
    return (
        <NavigationMenu.Root className={styles.root}>
            <NavigationMenu.List className={styles.list}>
                {props.menuItems.map((item) => (
                    <NavigationMenu.Item key={item}>
                        <NavigationMenu.Link href={`#${item.toLowerCase()}`} className={styles.link}>
                            {item}
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
        </NavigationMenu.Root>        
    )
}