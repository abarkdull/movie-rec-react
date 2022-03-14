import React, {useEffect, useState} from 'react';


const MoviePoster = (props) => {

    const [posterHref, setPosterHref] = useState(null)

    useEffect(() => {

        if (props.movie) {
            console.log(props.movie.image);
            setPosterHref(props.movie.image)
        }

        

        console.log("search ran");

    });

    return ( 
        <div>
            <img className='movie-poster' src={posterHref} alt='' ></img>
        </div>
    );
}
 
export default MoviePoster;