import { SectionTopper } from "../shared/Section/SectionTopper";
import { Section } from "../shared/Section/Section";
import styles from "./Services.module.css";
import { ServiceCard } from "./ServiceCard";
import { SectionContent } from "../shared/Section/SectionContent";

type ServicesContent = {
    sectionName: string;
    heading: string;
    subheading: string;
    secondaryHeader: string;
    primaryCta: {
      label: string,
      href: string,
      icon: string
    },
    categories: {
        name: string;
        description: string;
        icon: string;
        cta: {label: string, href: string, icon?: string}
        services: {
            name: string;
            description: string;
            subText: string;
            icon: string;
        }[]
    }[]
}

export function Services ({content}: {content: ServicesContent}){
    return(
        <Section>
            <SectionTopper
                name={content.sectionName}
                heading={content.heading}
                subheading={content.subheading}
                cta={content.primaryCta}
            />
            <SectionContent className={styles.servicesContent}>
                <div className={styles.row}>
                    <div className={styles.miniHeaderBox}>
                        <h2 className={styles.miniHeader}>
                            {content.secondaryHeader}
                        </h2>
                    </div>
                    {content.categories.map((categories, i) => {
                        return (
                            <ServiceCard
                                key={i}
                                name={categories.name}
                                description={categories.description}
                                icon={categories.icon}
                                cta={categories.cta}
                            />
                        );
                    })}
                </div>
            </SectionContent>
        </Section>
    );
}