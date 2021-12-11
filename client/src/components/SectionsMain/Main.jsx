import React from 'react';
import HeroSection from './HeroSection';
import HeroMoviles from './HeroMoviles/HeroMoviles';
import HeroTarifas from './HeroTarifas/HeroTarifas';

const Main = () => (
        <div>
            <HeroSection />
            <HeroTarifas/>
            <HeroMoviles/>
        </div>
)

export default Main;