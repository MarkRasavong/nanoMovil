import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/SectionsMain/Main';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/registration' element={<ApplicationForm />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;