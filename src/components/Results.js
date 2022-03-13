import React from 'react';
import ResultItem from './ResultItem';

const Results = (props) => {


    const renderedResults = props.movies.map((movie) => {
        return (
            <ResultItem movieItem={movie} onActiveMovieChange={(movie) => {props.onActiveMovieChange(movie)}} />
        )
    })

    return ( 
        <ul class="list-group">
            {renderedResults}
        </ul>
     );
}
 
export default Results;