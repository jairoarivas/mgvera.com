import { ProjectCta } from "../components/ProjectCta/ProjectCta";
import { ProjectDirectory } from "../components/ProjectDirectory/ProjectDirectory";
import { ScrollableSocialProof } from "../components/ScrollableSocialProof/ScrollableSocialProof";
import { Section } from "../components/shared/Section/Section";
import { Spacer } from "../components/shared/Spacer/Spacer";
import projectsContent from "../docs/projects.json";
import socialProofContent from "../docs/social-proof.json";
import styles from "./ProjectsPage.module.css";

export function ProjectsPage() {
    const projectCount = projectsContent.projects.length;
    const featuredLocations = ["Miami", "Hialeah", "Islamorada", "Fort Lauderdale"];

    return (
        <>
            <Spacer />
            <Section first className={styles.section}>
                <header className={styles.header}>
                    <div className={styles.headerCopy}>
                        <p className={styles.kicker}>Projects</p>
                        <h1>Statewide presence, proven in the field.</h1>
                    </div>

                    <div className={styles.headerPanel} aria-label="Project portfolio highlights">
                        <div className={styles.statBlock}>
                            <span className={styles.statValue}>{projectCount}+</span>
                            <span className={styles.statLabel}>documented projects</span>
                        </div>
                        <div className={styles.statBlock}>
                            <span className={styles.statValue}>FL</span>
                            <span className={styles.statLabel}>statewide field coverage</span>
                        </div>
                        <div className={styles.locationList} aria-label="Featured project locations">
                            {featuredLocations.map((location) => (
                                <span key={location}>{location}</span>
                            ))}
                        </div>
                    </div>
                </header>
                <ProjectDirectory projects={projectsContent.projects} />
                <ProjectCta />
            </Section>

            <ScrollableSocialProof
                heading="Trusted by public agencies, municipalities, and project teams across Florida"
                logoFileNames={socialProofContent.logoFileNames}
            />
        </>
    );
}
