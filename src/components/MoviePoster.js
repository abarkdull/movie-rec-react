import React, {useEffect, useState} from 'react';


const MoviePoster = (props) => {

    const [posterHref, setPosterHref] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {

        if (props.movie) {
            setPosterHref(props.movie.image);
        }

    });

    return ( 
        <div className='col-lg-6'>
            <iframe title='my-cool-title' src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen style={ imageLoaded ? {display: 'none'} : {}}></iframe>
            <img className='movie-poster' onLoad={() => setImageLoaded(true)} src={posterHref} alt='' style={ imageLoaded ? {} : {display: 'none'}} ></img>
        </div>
    );
}
 
export default MoviePoster;