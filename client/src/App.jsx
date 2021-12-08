import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/SectionsMain/Main';
import { fetchCart, fetchMoviles, fetchTarifas, fetchTopMoviles } from './actions/commerce';
import { useDispatch } from 'react-redux';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutComponents/Checkout/Checkout';
import Auth from './components/Auth/Auth.jsx';
import UserAdmin from './components/UserAdmin/UserAdmin';

const App = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        fetchTarifas(dispatch);
        fetchMoviles(dispatch);
        fetchCart(dispatch);
        fetchTopMoviles(dispatch);
    }, [dispatch]);


    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/productos' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/authorization' element={<Auth />} />
                    <Route path='/user-admin' element={!user ? <Navigate to='/authorization' />: <UserAdmin />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;