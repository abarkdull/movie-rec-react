/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = (props) => {

    const [movieInfo, setMovieInfo] = useState('');

    const queryIMDB = async () => {

        const url = 'https://imdb-api.com/en/API/Title/k_7vd2w9n4/' + props.movie.id
        const response = await axios.get(url)
        setMovieInfo(response.data) 
    }

    // if active movie changes, setMovieInfo to empty string
    useEffect(() => setMovieInfo(''), [props.movie]);


    if (movieInfo) {
        return (
            <div className='col-lg-6 movie-details'>
                <p>Title: {movieInfo.title}</p>
                <p>Director(s): {movieInfo.directors}</p>
                <p>Writer(s): {movieInfo.writers}</p>
                <p>Actors: {movieInfo.stars}</p>
                <p>Release Date: {movieInfo.releaseDate}</p>
                <p>Genre(s): {movieInfo.genres}</p>
                <p>Metactritic rating: {movieInfo.metacriticRating}</p>
                <p>Plot: {movieInfo.plot}</p>
            </div>
        )
    }
    else {
        return (
            <div className='col-lg-6 movie-details'>
                {/* <p>Title: {props.movie.title}</p> */}
                {props.movie ? <a onClick={() => queryIMDB()} href='javascript:void(0);'>See more</a> : null}
            </div>
        )
    }

}
 
export default MovieDetails;