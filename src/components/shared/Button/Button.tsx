import styles from "./Button.module.css";

type ButtonProps = {
    label: string;
    href: string;
    icon?: string;
    size?: "sm" | "md" | "lg"; 
    className?: string;
}

export function Button(props: ButtonProps) {
    const sizeClass =
    props.size === "sm" ? styles["button--sm"] :
    props.size === "lg" ? styles["button--lg"] :
    styles["button--md"];

    return (
        <a className={`${styles.button} ${sizeClass} ${props.className ?? ""}`} href={props.href}>
            {props.icon && (
                <svg>
                    <use href={props.icon}/>
                </svg>
            )}

            {props.label}
        </a>
    );
}