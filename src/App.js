import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {

    return (
        <div className='container-fluid' style={{ backgroundImage: 'url(moroccan-flower-dark.png' }}>
            <section id='title'>
                <div className='row' style={{ padding: "20% 15%" }}>
                    <SearchBar />
                </div>
            </section>
        </div>
    );
}

export default App;