import React from 'react';
import Banner from './Banner';
import SearchBar from './SearchBar';

const Section = (props) => {
    return ( 
        <section id='title'>
            <div className='row'>
                {props.children}
            </div>
        </section>
     );
}
 
export default Section;