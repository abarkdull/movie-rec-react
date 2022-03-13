import React, { useState, useEffect } from 'react';

const ResultItem = (props) => {

    const [propActive, setPropActive] = useState('');

    useEffect(() => {
        const set = () => {
            setPropActive(props.activeMovie === props.movieItem ? 'active' : '');
        }

        set()
    })

    return ( 
        <li class={`list-group-item ${propActive}`} 
            onClick={(e) => {
                props.onActiveMovieChange(props.movieItem)
                }
            }
            >
        {props.movieItem}</li>
     );
}
 
export default ResultItem;