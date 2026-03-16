import { About } from "../components/About/About";
import { Hero } from "../components/Hero/Hero";
import { Services } from "../components/Services/Services";
import { SocialProof } from "../components/SocialProof/SocialProof";
import { TrustBadges } from "../components/TrustBadges/TrustBadges";

import * as heroContent from "../docs/hero.json";
import * as socialProofContent from "../docs/social-proof.json";
import * as servicesContent from "../docs/services.json";

export function HomePage() {
    return (
        <>
            <Hero content={heroContent}/>
            <TrustBadges/>
            <About/>
            <Services content={servicesContent}/>
            <SocialProof content={socialProofContent}/>
        </>
    );
}