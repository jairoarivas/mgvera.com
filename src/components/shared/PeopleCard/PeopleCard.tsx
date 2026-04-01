import { Image } from "../Image";
import styles from "./PeopleCard.module.css";

export type PeopleCardProps = {
    name: string
    role: string
    imageAvifSrcSet: string
    imageWebpSrcSet: string
    imageFallbackJpg: string
}

export function PeopleCard (props: PeopleCardProps){
    return(
        <div className={styles.root}>
            <div className={styles.inner}>
                <Image
                    className={styles.image}
                    avifSrcSet={props.imageAvifSrcSet}
                    webpSrcSet={props.imageWebpSrcSet}
                    fallbackJpg={props.imageFallbackJpg}
                    alt={props.name}
                    sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, (max-width: 1199px) 33vw, 25vw"
                    position="50% 0%"
                />
                <div className={styles.textBox}>
                    <h3 className={styles.name}>{props.name}</h3>
                    <h4 className={styles.role}>{props.role}</h4>
                </div>
            </div>
            
        </div>
    );
}
