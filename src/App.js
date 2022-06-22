import React from 'react';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
    return (
        <>
        <div>
            <NavBar />
        </div>
        <div>
            {/* <ItemListContainer name="Alejo" /> */}
            <ItemDetailContainer />
        </div>
        </>
    );
}

export default App;