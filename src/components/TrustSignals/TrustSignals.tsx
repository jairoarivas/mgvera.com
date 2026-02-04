import { SectionTopper } from "../shared/Section/SectionTopper";
import { Section } from "../shared/Section/Section";
import styles from "./TrustSignals.module.css";
import { SectionContent } from "../shared/Section/SectionContent";

export function TrustSignals (){
    return(
        <Section>
            <SectionTopper
                name="Why Us"
                heading="Surveying Florida for Over 50 Years"
                subheading="Family-owned. Technology-driven. Trusted by Florida's largest agencies."
                cta={{
                    "label": "Call Now",
                    "href": "",
                    "icon": "phone"
                }}
            />
        </Section>
    );
}