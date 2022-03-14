import React, { useState } from 'react';
import axios from 'axios';

const MovieDetails = (props) => {

    const [movieInfo, setMovieInfo] = useState('');

    const queryIMDB = async () => {

        const url = 'https://imdb-api.com/en/API/Title/k_7vd2w9n4/' + props.movie.id
        const response = await axios.get(url)
        setMovieInfo(response.data) 
    }



    if (movieInfo) {
        <div className=''></div>
    }
    else {
        return (
            <div className='col-lg-6 movie-details'>
                <p>{props.movie.image}</p>
                {props.movie ? <a onClick={() => queryIMDB()} href='javascript:void(0);'>See more</a> : null}
            </div>
        )
    }

}
 
export default MovieDetails;