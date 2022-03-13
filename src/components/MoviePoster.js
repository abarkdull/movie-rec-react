import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MoviePoster = (props) => {

    const [posterHref, setPosterHref] = useState(null)

    useEffect(() => {
        const search = async () => {
            console.log('running search');
            const imdbData = await axios.get('https://imdb-api.com/en/API/Search/k_7vd2w9n4/inception 2010');

            console.log(imdbData.data);
            setPosterHref(imdbData.data.results[0].image);
            
        }
        
        search();
    });

    return ( 
        <div>
            <img src={posterHref} alt='' ></img>
        </div>
    );
}
 
export default MoviePoster;