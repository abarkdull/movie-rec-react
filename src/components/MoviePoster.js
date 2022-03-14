import React, {useEffect, useState} from 'react';


const MoviePoster = (props) => {

    const [posterHref, setPosterHref] = useState(null)

    useEffect(() => {

        if (props.movie) {
            setPosterHref(props.movie.image)
        }

    });

    return ( 
        <div className='col-lg-6'>
            <img className='movie-poster' src={posterHref} alt='' ></img>
        </div>
    );
}
 
export default MoviePoster;