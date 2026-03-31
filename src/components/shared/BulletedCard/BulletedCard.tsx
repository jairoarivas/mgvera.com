import { Button } from "../Button/Button";
import styles from "./BulletedCard.module.css";

export type BulletedCardProps = {
    name: string;
    icon: string;
    bullets?: string[];
    cta?: {
        label: string;
        href: string;
    },
}

export function BulletedCard(props: BulletedCardProps) {
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
                {props.bullets && props.bullets.length > 0 && (
                    <ul className={styles.serviceList}>
                        {props.bullets.slice(0, 4).map((bullet) => (
                            <li key={bullet} className={styles.serviceItem}>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
                {props.cta && <Button className={styles.button}
                    label={props.cta.label}
                    href={props.cta.href}
                />}
            </div>
        </div>
    );
}
