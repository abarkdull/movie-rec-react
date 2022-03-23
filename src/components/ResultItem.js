import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Streaming from './Streaming';

const ResultItem = (props) => {

    const [propActive, setPropActive] = useState('');
    const [streamingServices, setStreamingServices] = useState('');

    useEffect(() => {

        const getStreamingInfo = async () => {

            let response = await axios.get(`https://api.watchmode.com/v1/title/${props.movieItem.id}/sources/?apiKey=GsezhdLTzJSD7bFkHFeUd3vnFFTIKtvjykkY6AF8`);

            
            response = response.data.filter(source => source.type === 'sub');
            console.log('response from moviedata: ', response);
            return response;
        };

        const set = () => {
            if (props.activeMovie === props.movieItem) {
                setPropActive('active');
                const res = getStreamingInfo();
                setStreamingServices(res)
            }
            else {
                setPropActive('');
            }
        };

        set()
    }, [props.activeMovie]);


    return ( 
        <li class={`list-group-item ${propActive} bg-transparent custom-list-item`}  
            onClick={(e) => {
                props.onActiveMovieChange(props.movieItem)
                }
            }
            >
            <div style={{ textAlign: 'left'}}>
                <p style={{ display: 'inline-block'}}>{props.movieItem.title}</p>
                {props.activeMovie === props.movieItem ? <Streaming sources={streamingServices} activeMovie={props.activeMovie} /> : ''}
            </div>
        </li>
     );
}
 
export default ResultItem;