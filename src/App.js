import React from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';

const App = () => {

    return (
        <div style={{ backgroundImage: 'url(moroccan-flower-dark.png) '}}>
            <Navbar />
            <div className='container-fluid' style={{ backgroundColor: 'transparent' }}>
                <section id='title'>
                    <div className='row' style={{ padding: "20% 15%" }}>
                        <SearchBar />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;