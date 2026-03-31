import { BulletedCard, BulletedCardProps } from "../BulletedCard/BulletedCard";
import styles from "./CardHolder.module.css";

export type CardHolderProps = {
    heading?: string;
    items: BulletedCardProps[]
}

export function CardHolder (props: CardHolderProps){
    return(
        <div className={styles.root}>
            <div className={styles.miniHeaderBox}>
                {props.heading && <h2 className={styles.miniHeader}>{props.heading}</h2>}
            </div>
            {props.items.map(item => 
                <BulletedCard
                    key={item.name}
                    name={item.name}
                    icon={item.icon}
                    bullets={item.bullets}
                    cta={item.cta}
                />
            )}
        </div>
    );
}
