import styles from "./Spacer.module.css";

type SpacerSize = "sm" | "md" | "lg";

type SpacerProps = {
    size?: SpacerSize;
    className?: string;
}

export function Spacer({
    size = "md",
    className,
}: SpacerProps) {
    return (
        <div
            aria-hidden="true"
            className={`${styles.spacer} ${styles[size]} ${className ?? ""}`}
        />
    );
}
