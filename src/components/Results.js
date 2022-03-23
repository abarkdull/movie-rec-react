import React from 'react';
import ResultItem from './ResultItem';

const Results = (props) => {    


    const renderedResults = props.movies.map((movie) => 
    {
        return (
            <ResultItem activeMovie={props.activeMovie} movieItem={movie} onActiveMovieChange={(movie) => {
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