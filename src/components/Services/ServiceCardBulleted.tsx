import { Button } from "../shared/Button/Button";
import styles from "./ServiceCardBulleted.module.css";

type ServiceCardBulletedProps = {
    name: string;
    icon: string;
    services?: string[];
    cta?: {
        label: string;
        href: string;
        icon?: string;
    },
}

export function ServiceCardBulleted(props: ServiceCardBulletedProps) {
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
                </div>
                {props.services && props.services.length > 0 && (
                    <ul className={styles.serviceList}>
                        {props.services.slice(0, 4).map((service) => (
                            <li key={service} className={styles.serviceItem}>
                                {service}
                            </li>
                        ))}
                    </ul>
                )}
                {props.cta && <Button className={styles.button}
                    label={props.cta.label}
                    href={props.cta.href}
                    icon={props.cta.icon}
                />}
            </div>
        </div>
    );
}
