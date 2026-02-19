import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { Hero } from './components/Hero/Hero'
import * as heroContent from "../src/docs/hero.json";
import * as desktopNavbarContent from "../src/docs/desktop-navbar.json";
import * as socialProofContent from "../src/docs/social-proof.json";
import * as servicesContent from "../src/docs/services.json";
import { CustomSprites } from './components/CustomSprites';
import { DesktopNavbar } from './components/DesktopNavbar/DesktopNavbar';
import { SocialProof } from './components/SocialProof/SocialProof';
import { Services } from './components/Services/Services';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { LogoSprites } from './components/shared/LogoComponents/LogoSprites';
import { TrustBadges } from './components/TrustBadges/TrustBadges';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CustomSprites/>
        <LogoSprites/>
        <DesktopNavbar content={desktopNavbarContent}/>
        <Hero content={heroContent}/>
        <TrustBadges/>
        <About/>
        <Services content={servicesContent}/>
        <SocialProof content={socialProofContent}/>
        <Footer/>
    </StrictMode>
)
