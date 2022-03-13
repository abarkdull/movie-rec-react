import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';

const SearchBar = (props) => {

    const [ searchTerm, setSearchTerm ] = useState('puppies')

    function searchSubmit(e) {
        e.preventDefault()

        props.onSearchSubmit(searchTerm)
    }

    return (
        <div className="input-group rounded">
            <input onKeyDown={(e) => e.key === 'Enter' ? searchSubmit(e) : {} } value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search" onClick={(e) => searchSubmit(e)}></i>
            </span>
        </div>
    )
}
 
export default SearchBar;