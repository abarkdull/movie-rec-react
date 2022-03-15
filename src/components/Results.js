import React, { useState } from 'react';
import ResultItem from './ResultItem';

const Results = (props) => {

    const [activeMovie, setActiveMovie] = useState('');

    const renderedResults = props.movies.map((movie) => {
        return (
            <ResultItem activeMovie={activeMovie} movieItem={movie} onActiveMovieChange={(movie) => {
                    setActiveMovie(movie)
                    props.onActiveMovieChange(movie)
                }} 
            />
        )
    })

    return ( 
        <ul class="list-group bg-transparent list-group-mine" style={{  }}>
            {renderedResults}
        </ul>
     );
}
 
export default Results;