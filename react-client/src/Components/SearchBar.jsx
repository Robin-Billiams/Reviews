import React from 'react';
import {searchBorders, searchBar, searchButton} from '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar(props) {
    return(
        <div className={searchBorders}>
            <input type="text" placeholder="Search topics and reviews" className={searchBar} size="50"></input>
            <button type="submit" className={searchButton}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    )
}


export default SearchBar