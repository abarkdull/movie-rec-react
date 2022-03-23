import React, { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import movie_api from './movie_api';
import Results from './components/Results';
import MoviePoster from './components/MoviePoster';
import Section from './components/Section';
import MovieDetails from './components/MovieDetails';

const App = () => {

    const [results, setResults] = useState([])
    const [activeMovie, setActiveMovie] = useState('')
    const [fullScreen, setFullScreen] = useState('full-screen')
    const [validSearch, setValidSearch] = useState('')

    const resultsRef = useRef(null)

    const search = async (term) => {
        const response = await movie_api.get('/imdb', {
            params: {
                q: term
            }
        })

        if (response.data.length > 2) {
            setFullScreen('')
            setResults(response.data);
            setActiveMovie(response.data[0])
            resultsRef.current.scrollIntoView();
            setValidSearch('is-valid')
        } 
        else {
            setValidSearch('is-invalid')
        }
    }

    const onActiveMovieChange = (movie) => {
        setActiveMovie(movie)
    }
    
    // elements: backgroundAttachment: 'fixed', backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', backgroundPosition: ''

    return (
        <div className={ fullScreen ? {} : 'set-viewport'}>
            <div className={fullScreen}>
                <Navbar />
                <div className='container-fluid'>
                    <Section>
                        <div className='row'>
                            <Banner />
                        </div>
                        <div className='row search-bar' style={{ padding: "5% 20% 8%" }}>
                            <SearchBar searchValidity={validSearch} onSearchSubmit={(movie) => search(movie)} />
                        </div>
                        <div className='row imdb-footer'>
                            <p style={{ textAlign: 'center', color: 'white', fontFamily: 'Lato', fontStyle: 'italic'}}>-- Data courtesy of iMDB<img src='imdb.png' style={{ width: '100px', height: 'auto', alignText: 'center'}} /> --</p>
                            
                        </div>
                    </Section>
                </div>
            </div>
                
            <div>
                <div className='container-fluid'>
                    <section id="results" ref={resultsRef}>
                        <div className='row results-row'>
                            <h1 style={{ fontFamily: 'Lato', textAlign: 'center', paddingBottom: '5%'}}>Your recommendations:</h1>
                            <div className='col-lg-6 movie-results' style={{}}>
                                <Results onActiveMovieChange={(movie) => onActiveMovieChange(movie)} movies={results} activeMovie={activeMovie} />
                            </div>
                            <div className='col-lg-6 movie-poster-col'>
                                <div className='row'>
                                    <MoviePoster movie={activeMovie}/>                   
                                    <MovieDetails movie={activeMovie} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;