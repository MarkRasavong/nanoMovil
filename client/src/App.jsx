import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import HeroMoviles from './components/HeroMoviles/HeroMoviles';
import HeroTarifas from './components/HeroTarifas/HeroTarifas';
import Navbar from './components/Navbar/Navbar';


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HeroTarifas />
            <HeroMoviles />
            <Footer />
        </div>
    )
}

export default App;