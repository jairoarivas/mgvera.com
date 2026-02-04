import { Button } from "../Button/Button";
import styles from "./SectionTopper.module.css";

type SectionTopperProps = {
    name: string;
    heading: string;
    subheading?: string;
    cta? : {
        label: string;
        href: string;
        icon: string;
    };
}

export function SectionTopper(props: SectionTopperProps){
    return(
        <div className={styles.headingBox}>
            <div className={styles.textBox}>
                <div className={styles.textCol}>
                    <h1 className={styles.sectionName}>{props.name}</h1>
                    <h1 className={styles.heading}>{props.heading}</h1>
                    {props.subheading && <p className={styles.subheading}>{props.subheading}</p>}
                </div>
            </div>
            <div className={styles.ButtonBox}>
                { props.cta && <Button 
                    label={props.cta.label} 
                    href={props.cta.href}
                    icon={`#${props.cta.icon}`}
                    size="lg"
                />}
            </div>
        </div>
    );
}