import { useEffect, useState } from "react";
import React from 'react';

const Streaming = (props) => {

    const [sources, setSources] = useState('');


    useEffect(() => {

        console.log(props.sources);
       
            
        if (props.sources) {
    
           
        }

    }, [props.activeMovie]);

    // let imgSrc = source.name.trim().replace(' ', '');


    return ( 
        <div>
            {/* {renderResults()} */}
            <img src='logos/hulu.png' style={{ display:'inline-block' ,width: '38px', height: 'auto', float: 'right' }} />
        </div>
    );
}

 
export default Streaming;