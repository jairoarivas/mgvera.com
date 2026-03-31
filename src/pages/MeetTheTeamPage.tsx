import { PeopleCardHolder } from "../components/shared/PeopleCard/PeopleCardHolder";
import { Section } from "../components/shared/Section/Section";
import { SectionTopper } from "../components/shared/Section/SectionTopper";
import { Spacer } from "../components/shared/Spacer/Spacer";
import aboutPeople from "../docs/about.json";

type MeetTheTeamPageProps = {
  name: string;
  subheading: string;
  cta: {
    label: string;
    href: string;
  };
};

export function MeetTheTeamPage(props: MeetTheTeamPageProps) {
    return (
        <>
            <Spacer/>
            <Section>
                <SectionTopper
                    name="about"
                    heading={props.name}
                    subheading={props.subheading}
                    cta={props.cta}
                />
                <PeopleCardHolder items={aboutPeople} />
            </Section>
        </>
    );
}
