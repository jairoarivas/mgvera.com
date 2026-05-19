import { useState } from "react";
import { Image } from "../shared/Image";
import styles from "./ProjectShowcase.module.css";

type ProjectShowcaseProject = {
    id: string;
    title: string;
    description: string;
    body?: string[];
    location: {
        label: string;
    };
    photo: {
        image: string;
        imageAlt: string;
        imageAvifSrcSet: string;
        imageWebpSrcSet: string;
        imagePosition?: string;
        imageFit?: string;
    };
};

type ProjectShowcaseProps = {
    projects: ProjectShowcaseProject[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
    const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id);
    const selectedProject =
        projects.find((project) => project.id === selectedProjectId) ?? projects[0];

    if (!selectedProject) {
        return null;
    }

    return (
        <div className={styles.layout}>
            <aside className={styles.projectRail} aria-label="Project list">
                {projects.map((project, index) => {
                    const isSelected = project.id === selectedProject.id;

                    return (
                        <button
                            className={`${styles.projectButton} ${isSelected ? styles.selected : ""}`}
                            type="button"
                            key={project.id}
                            aria-pressed={isSelected}
                            onClick={() => setSelectedProjectId(project.id)}
                        >
                            <span className={styles.projectNumber}>{String(index + 1).padStart(2, "0")}</span>
                            <span className={styles.projectButtonText}>
                                <span className={styles.projectTitle}>{project.title}</span>
                                <span className={styles.projectLocation}>{project.location.label}</span>
                            </span>
                        </button>
                    );
                })}
            </aside>

            <article className={styles.detail} key={selectedProject.id}>
                <div className={styles.imageWrap}>
                    <Image
                        className={styles.image}
                        avifSrcSet={selectedProject.photo.imageAvifSrcSet}
                        webpSrcSet={selectedProject.photo.imageWebpSrcSet}
                        fallbackJpg={selectedProject.photo.image}
                        alt={selectedProject.photo.imageAlt}
                        sizes="(max-width: 900px) 100vw, 64vw"
                        position={selectedProject.photo.imagePosition}
                        style={{
                            "--project-image-fit": selectedProject.photo.imageFit ?? "cover",
                        } as React.CSSProperties}
                    />
                </div>

                <div className={styles.detailContent}>
                    <p className={styles.detailLocation}>{selectedProject.location.label}</p>
                    <h2 className={styles.detailTitle}>{selectedProject.title}</h2>
                    <div className={styles.body}>
                        {(selectedProject.body ?? [selectedProject.description]).map((paragraph) => (
                            <p className={styles.description} key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
