import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NotFoundPage from './pages/NotFound';
import {CartContextProvider} from './context/CartContext';
import CartViewContainer from './components/CartViewContainer'


function App() {
    return (
        <>
            
        <div className='app-container'>
            <CartContextProvider>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/product/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/cart' element={<CartViewContainer/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </CartContextProvider>
        </div>
        </>
    );
}

export default App;