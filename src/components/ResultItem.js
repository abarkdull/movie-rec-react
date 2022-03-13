import React, { useState } from 'react';

const ResultItem = (props) => {

    const [propActive, setPropActive] = useState('');

    return ( 
        <li class={`list-group-item ${propActive}`} 
            onMouseOver={(e) => {
                setPropActive('active')
                props.onActiveMovieChange(props.movieItem)
                }
            }
            onMouseLeave={(e) => {setPropActive('')}}>
        {props.movieItem}</li>
     );
}
 
export default ResultItem;