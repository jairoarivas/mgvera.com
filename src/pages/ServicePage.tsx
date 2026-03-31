import { CardHolder } from "../components/shared/CardHolder/CardHolder";
import { Section } from "../components/shared/Section/Section";
import { SectionTopper } from "../components/shared/Section/SectionTopper";
import { Spacer } from "../components/shared/Spacer/Spacer";

type ServicePageProps = {
  name: string;
  cta: {
    label: string;
    href: string;
  };
  services: {
    name: string;
    description: string;
    icon: string;
  }[];
};

export function ServicePage(props: ServicePageProps) {
    return (
        <>  
            <Spacer/>
            <Section>
                <SectionTopper
                    name="services"
                    heading={props.name}
                    subheading="Here we go again"
                    cta={props.cta}
                />
                <CardHolder 
                    heading="We do these kind of things"
                    items={props.services}
                />
            </Section>
        </>
    );
}