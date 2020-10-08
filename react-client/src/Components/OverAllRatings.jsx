import React from 'react'
import Rating from 'react-rating';
import {gridContainerTop, header1, header2} from '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar as faStarSolid
} from '@fortawesome/free-solid-svg-icons';

function OverAllRatings(props) {

    const rating = props.rating;
    const list = props.currentList
    return (
    <div className={gridContainerTop}>
        <div className={header1}>
            <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#cecece"}}/>}
            fullSymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#fdd361"}}/>}
            fractions={1000}
            readonly
            />  {rating}
        </div>
        <div className={header2} >
             {list.length} Reviews
        </div>
    </div>
    )
  }


export default OverAllRatings