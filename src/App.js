import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
    return (
        <>
        <div>
            <NavBar />
        </div>
        <div>
            <ItemListContainer name="Alejo" />
        </div>
        </>
    );
}

export default App;