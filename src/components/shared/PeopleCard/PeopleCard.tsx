import styles from "./PeopleCard.module.css";

export type PeopleCardProps = {
    name: string
    role: string
    image: string
}

export function PeopleCard (props: PeopleCardProps){
    return(
        <div className={styles.root}>
            <div className={styles.inner}>
                <img className={styles.image} src={props.image} alt={props.name} />
                <div className={styles.textBox}>
                    <h3 className={styles.name}>{props.name}</h3>
                    <h4 className={styles.role}>{props.role}</h4>
                </div>
            </div>
            
        </div>
    );
}
