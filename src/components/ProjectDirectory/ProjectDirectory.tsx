import styles from "./ProjectDirectory.module.css";

type ProjectDirectoryProject = {
    id: string;
    title: string;
    description: string;
    location: {
        label: string;
    };
};

type ProjectDirectoryProps = {
    projects: ProjectDirectoryProject[];
};

export function ProjectDirectory({ projects }: ProjectDirectoryProps) {
    return (
        <div className={styles.projectGrid} aria-label="Project list">
            {projects.map((project, index) => (
                <article className={styles.projectCard} key={project.id}>
                    <div className={styles.cardHeader}>
                        <span className={styles.projectNumber}>{String(index + 1).padStart(2, "0")}</span>
                        <span className={styles.projectLocation}>{project.location.label}</span>
                    </div>

                    <div className={styles.cardBody}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}
