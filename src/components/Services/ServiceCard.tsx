import { Button } from "../shared/Button/Button";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
    name: string;
    description: string;
    icon: string;
    cta?: {
        label: string;
        href: string;
        icon?: string;
    },
}

export function ServiceCard(props: ServiceCardProps) {
    return(
        <div className={styles.root}>
            <div className={styles.col}>
                <div className={styles.iconBox}>
                    <svg className={styles.icon}>
                        <use href={props.icon}/>
                    </svg>
                </div>
                <div className={styles.textBox}>
                    <h1 className={styles.heading}>
                        {props.name}
                    </h1>
                    <p className={styles.description}>
                        {props.description}
                    </p>
                </div>
                {props.cta && <Button className={styles.button}
                    label={props.cta.label}
                    href={props.cta.href}
                    icon={props.cta.icon}
                />}
            </div>
        </div>
    );
}