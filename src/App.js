import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import movie_api from './movie_api';
import Results from './components/Results';
import MoviePoster from './components/MoviePoster';
import Section from './components/Section';

const App = () => {

    const [results, setResults] = useState([])
    const [activeMovie, setActiveMovie] = useState('')

    const search = async (term) => {
        const response = await movie_api.get('/imdb', {
            params: {
                q: term
            }
        })

        if (response.data) {
            console.log(response.data);
            setResults(response.data);
        } 
    }

    const onActiveMovieChange = (movie) => {
        setActiveMovie(movie)
    }
    

    return (
        <div>
            <div style={{ backgroundImage: 'url(moroccan-flower-dark.png) '}}>
                <Navbar />
                <div className='container-fluid' style={{ backgroundColor: 'transparent' }}>
                    <Section>
                        <div className='row'>
                            <Banner />
                        </div>
                        <div className='row' style={{ padding: "5% 20% 15%" }}>
                            <SearchBar onSearchSubmit={(movie) => search(movie)} />
                        </div>
                    </Section>
                </div>
            </div>
                
            <div>
                <div>
                    <section id="results">
                        <div className='row results-row'>

                            <div className='col-lg-6 movie-results'>
                                <Results onActiveMovieChange={(movie) => onActiveMovieChange(movie)} movies={results} />
                            </div>
                            <div className='col-lg-6 movie-poster'>
                                <MoviePoster movie={activeMovie}/>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;