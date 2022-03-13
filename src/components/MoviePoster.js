import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MoviePoster = (props) => {

    const [posterHref, setPosterHref] = useState(null)

    useEffect(() => {
        const search = async () => {
            console.log('running search');
            const imdbData = await axios.get('https://imdb-api.com/en/API/SearchMovie/k_vzvz8a1v/inception');

            console.log(imdbData.data);
            setPosterHref(imdbData.data.results[0].image);
            
        }
        
        if (props.movie) {
            search();
        }

    });

    return ( 
        <div>
            <img src={posterHref} alt='' ></img>
        </div>
    );
}
 
export default MoviePoster;