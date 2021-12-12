import React from 'react';
import HeroSection from './HeroSection';
import HeroMoviles from './HeroMoviles/HeroMoviles';
import HeroTarifas from './HeroTarifas/HeroTarifas';
import { Container } from '@material-ui/core';

const Main = () => (
        <Container container fluid>
            <HeroSection />
            <HeroTarifas/>
            <HeroMoviles/>
        </Container>
)

export default Main