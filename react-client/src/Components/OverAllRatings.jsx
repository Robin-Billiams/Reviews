import React from 'react'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar as faStarSolid
} from '@fortawesome/free-solid-svg-icons';

function OverAllRatings(props) {

    const rating = props.rating;
    const list = props.currentList
    return (
    <div className="grid-container-top">
        <div className="header1">
            <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#ccc"}}/>}
            fullSymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "yellow"}}/>}
            fractions={1000}
            readonly
            />
            {rating}
        </div>
        <div className="header2">
             {list.length} Reviews
        </div>
    </div>
    )
  }


export default OverAllRatings