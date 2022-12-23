import React from "react";
import { Routes, Route } from 'react-router-dom'
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../../shop-header";


function App() {
    return (
        <>
            <ShopHeader />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </>
    )
}

export default App;
