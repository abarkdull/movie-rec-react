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
        <li class={`list-group-item ${propActive} bg-transparent custom-list-item`} 
            onClick={(e) => {
                props.onActiveMovieChange(props.movieItem)
                }
            }
            >
        {props.movieItem.title}</li>
     );
}
 
export default ResultItem;