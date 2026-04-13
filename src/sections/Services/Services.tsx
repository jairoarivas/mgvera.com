import { SectionTopper } from "../../components/shared/Section/SectionTopper";
import { Section } from "../../components/shared/Section/Section";
import { CardHolder } from "../../components/shared/CardHolder/CardHolder";

type ServicesContent = {
    sectionName: string;
    heading: string;
    subheading: string;
    secondaryHeader: string;
    primaryCta: {
      label: string,
      href: string,
    },
    categories: {
        name: string;
        slug: string;
        pageSubheading: string;
        pageCardHeading: string;
        pageCardSubheading?: string;
        icon: string;
        cta: {label: string, href: string}
        services: {
            name: string;
            icon: string;
            bullets: string[];
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
            <CardHolder
                heading={content.secondaryHeader}
                items={content.categories.map(category => ({
                    name: category.name,
                    icon: category.icon,
                    bullets: category.services.map(service => service.name),
                    cta: category.cta
                }))}
            />
        </Section>
    );
}
