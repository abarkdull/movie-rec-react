import React from 'react';

const Banner = (props) => {
    return ( 
        <div style={{ textAlign: 'center', color: 'white', padding: '5% 20% 0%'}}>
            <h1 className='banner-header'>Movie Recommendations</h1>
            <p style={{ fontSize: '25px', fontFamily: 'Mukta'}} className='banner-description'>Want to find some new movies to watch? Search for a movie you already enjoy and we will do the rest!</p>
        </div>
     );
}
 
export default Banner;