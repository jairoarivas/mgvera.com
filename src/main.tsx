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

function LandingPage() {
    return (
        <>
            <CommonSprites/>
            <CustomSprites/>
            <LogoSprites/>
            <HomeNavbar content={navbarContent}/>
            <Outlet />
            <Footer/>
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
            <Footer/>
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
                    <Route path="/surveying-mapping" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
