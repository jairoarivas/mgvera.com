import { useState } from "react";
import { Button } from "../components/shared/Button/Button";
import { Image } from "../components/shared/Image";
import { Section } from "../components/shared/Section/Section";
import { Spacer } from "../components/shared/Spacer/Spacer";
import projectsContent from "../docs/projects.json";
import socialProofContent from "../docs/social-proof.json";
import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
    const [selectedProjectId, setSelectedProjectId] = useState(projectsContent.projects[0].id);
    const selectedProject = projectsContent.projects.find((project) => project.id === selectedProjectId) ?? projectsContent.projects[0];

    return (
        <>
            <Spacer />
            <Section first className={styles.section}>
                <div className={styles.layout}>
                    <aside className={styles.projectRail} aria-label="Project list">
                        {projectsContent.projects.map((project, index) => {
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

                <div className={styles.cta}>
                    <div className={styles.ctaText}>
                        <p className={styles.ctaEyebrow}>Have a project in mind?</p>
                        <h2 className={styles.ctaHeading}>Bring MGV in early for surveying, mapping, and utility coordination.</h2>
                    </div>
                    <Button
                        label="Start a Conversation"
                        href="mailto:cbustos@mgvera.com"
                        size="lg"
                        className={styles.ctaButton}
                    />
                </div>

            </Section>

            <section className={styles.socialProof} aria-label="Selected client and partner logos">
                <p className={styles.socialProofHeading}>Trusted by public agencies, municipalities, and project teams across Florida</p>
                <div className={styles.logoStrip}>
                    {socialProofContent.logoFileNames.map((logo) => (
                        <div className={styles.logoItem} key={logo}>
                            <img
                                src={`/images/social-proof-logos/${logo}.svg`}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
