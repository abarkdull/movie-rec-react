/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Navbar = (props) => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark" style={{ paddingRight: '5%', paddingBottom: '3%', paddingLeft: '7%', paddingTop: '3%', fontFamily: 'Mukta, san-serif', fontSize: '20px' }}>
            <a class="navbar-brand" href="#" style={{ fontSize: '35px'}}><i class="fa-solid fa-shuttle-space"></i> AstroBox</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;