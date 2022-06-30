import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NotFoundPage from './pages/NotFound';
import {CartContextProvider} from './context/CartContext';
import CartView from './components/CartView';


function App() {
    return (
        <>
            
        <div>
            <CartContextProvider>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/product/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/cart' element={<CartView/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </CartContextProvider>
        </div>
        </>
    );
}

export default App;