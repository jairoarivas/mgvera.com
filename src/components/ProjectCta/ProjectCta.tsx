import { Button } from "../shared/Button/Button";
import styles from "./ProjectCta.module.css";

type ProjectCtaProps = {
    eyebrow?: string;
    heading?: string;
    button?: {
        label: string;
        href: string;
    };
};

export function ProjectCta({
    eyebrow = "Have a project in mind?",
    heading = "Bring MGV in early for surveying, mapping, and utility coordination.",
    button = {
        label: "Start a Conversation",
        href: "mailto:cbustos@mgvera.com",
    },
}: ProjectCtaProps) {
    return (
        <div className={styles.cta}>
            <div className={styles.ctaText}>
                <p className={styles.ctaEyebrow}>{eyebrow}</p>
                <h2 className={styles.ctaHeading}>{heading}</h2>
            </div>
            <Button
                label={button.label}
                href={button.href}
                size="lg"
                className={styles.ctaButton}
            />
        </div>
    );
}
