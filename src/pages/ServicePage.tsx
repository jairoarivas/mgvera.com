import { CardHolder } from "../components/shared/CardHolder/CardHolder";
import { Image } from "../components/shared/Image";
import { Section } from "../components/shared/Section/Section";
import { SectionTopper } from "../components/shared/Section/SectionTopper";
import { Spacer } from "../components/shared/Spacer/Spacer";
import styles from "./ServicePage.module.css";

type ServicePageProps = {
  name: string;
  subheading: string;
  cardHeading: string;
  imageAlt: string;
  imageAvifSrcSet: string;
  imageWebpSrcSet: string;
  imageFallbackJpg: string;
  imagePosition: string;
  cta: {
    label: string;
    href: string;
  };
  services: {
    name: string;
    icon: string;
    bullets: string[];
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
                    subheading={props.subheading}
                    cta={props.cta}
                />
                <div>
                    <Image
                        className={styles.image}
                        avifSrcSet={props.imageAvifSrcSet}
                        webpSrcSet={props.imageWebpSrcSet}
                        fallbackJpg={props.imageFallbackJpg}
                        alt={props.imageAlt}
                        sizes="(max-width: 1024px) 100vw, 90rem"
                        position={props.imagePosition}
                    />
                    <CardHolder 
                        heading={props.cardHeading}
                        items={props.services}
                    />
                </div>
            </Section>
        </>
    );
}
