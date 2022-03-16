import React, { useState } from 'react';

const SearchBar = (props) => {

    const [ searchTerm, setSearchTerm ] = useState('puppies')

    function searchSubmit(e) {
        e.preventDefault()

        props.onSearchSubmit(searchTerm)
    }

    console.log(props.searchValidity);

    return (
        <div className="input-group rounded">
            <input type="search" className={`form-control rounded ${props.searchValidity}`} placeholder="Search" aria-label="Search" aria-describedby="search-addon" onKeyDown={(e) => e.key === 'Enter' ? searchSubmit(e) : {} } value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search" onClick={(e) => searchSubmit(e)}></i>
            </span>
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Movie not found :(
            </div>
        </div>
    )
}
 
export default SearchBar;