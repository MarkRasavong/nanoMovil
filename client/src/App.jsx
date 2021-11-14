import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/SectionsMain/Main';
import { fetchCart, fetchMoviles, fetchTarifas } from './actions/commerce';
import { useDispatch } from 'react-redux';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutComponents/Checkout/Checkout';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTarifas(dispatch);
        fetchMoviles(dispatch);
        fetchCart(dispatch);
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/productos' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;