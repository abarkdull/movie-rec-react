import React, { useState } from 'react';

const SearchBar = (props) => {

    const [ searchTerm, setSearchTerm ] = useState('puppies')

    console.log(searchTerm);

    return (
        <div className="input-group rounded">
            <input onChange={(e) => setSearchTerm(e.target.value)} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
        </div>
    )
}
 
export default SearchBar;