import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { CustomSprites } from './components/CustomSprites';
import { Footer } from './components/Footer/Footer';
import { LogoSprites } from './components/shared/LogoComponents/LogoSprites';
import { CommonSprites } from './components/shared/CommonSprites';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { HomeNavbar } from './components/HomeNavbar';
import { InteriorNavbar } from './components/InteriorNavbar';

import * as navbarContent from "../src/docs/navbar.json";
import * as footerContent from "../src/docs/footer.json";
import * as servicesContent from "../src/docs/services.json";
import { ServicePage } from './pages/ServicePage';
import { MeetTheTeamPage } from './pages/MeetTheTeamPage';
import { LegacyPage } from './pages/LegacyPage';

function LandingPage() {
    return (
        <>
            <CommonSprites/>
            <CustomSprites/>
            <LogoSprites/>
            <HomeNavbar content={navbarContent}/>
            <Outlet />
            <Footer content={footerContent}/>
        </>
    );
}

function InteriorPages() {
    return (
        <>
            <CommonSprites/>
            <CustomSprites/>
            <LogoSprites/>
            <InteriorNavbar content={navbarContent}/>
            <Outlet />
            <Footer content={footerContent}/>
        </>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route element={<InteriorPages />}>
                    {servicesContent.categories.map((serviceCategory) => {
                        return <Route path={`/${serviceCategory.slug}`} element={
                            <ServicePage 
                                name={serviceCategory.name}
                                subheading={serviceCategory.pageSubheading}
                                cardHeading={serviceCategory.pageCardHeading}
                                cardSubheading={serviceCategory.pageCardSubheading}
                                imageAlt={serviceCategory.pageImageAlt}
                                imageAvifSrcSet={serviceCategory.pageImageAvifSrcSet}
                                imageWebpSrcSet={serviceCategory.pageImageWebpSrcSet}
                                imageFallbackJpg={serviceCategory.pageImageFallbackJpg}
                                imagePosition={serviceCategory.pageImagePosition}
                                imageBrightness={serviceCategory.pageImageBrightness}
                                cta={{label: "Get in Touch", href: "mailto:cbustos@mgvera.com"}}
                                services={serviceCategory.services}
                            />} 
                        />
                    })}
                    <Route path={"/meet-the-team"} element={
                        <MeetTheTeamPage
                            name={"Meet The Team"}
                            subheading={"The team that carries our legacy forward"}
                            cta={{label: "Get in Touch", href: "mailto:cbustos@mgvera.com"}}
                        />
                    }/>
                    <Route path={"/our-legacy"} element={
                        <LegacyPage
                            name={"Our Legacy"}
                            subheading={"The history, growth, and values that shaped MGV over the decades."}
                            cta={{label: "Get in Touch", href: "mailto:cbustos@mgvera.com"}}
                        />
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
