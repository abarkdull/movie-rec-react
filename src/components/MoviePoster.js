/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useEffect, useState} from 'react';


const MoviePoster = (props) => {

    const [posterHref, setPosterHref] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {

        if (props.movie) {
            setImageLoaded(false)
            setPosterHref(props.movie.image);
        }

    }, [props.movie]);

    return ( 
        <div className='col-lg-6'>
            <iframe src="https://giphy.com/embed/l4FGIO2vCfJkakBtC" frameBorder="0" class="giphy-embed" allowFullScreen style={ imageLoaded ? {display: 'none'} : {}} ></iframe>
            <img className='movie-poster' onLoad={() => setImageLoaded(true)} src={posterHref} alt='' style={ imageLoaded ? {} : {display: 'none'}} ></img>
        </div>
    );
}
 
export default MoviePoster;


