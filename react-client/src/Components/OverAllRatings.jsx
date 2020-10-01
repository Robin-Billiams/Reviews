import React from 'react'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import {
    faStar as faStarRegular
  } from '@fortawesome/free-regular-svg-icons';
  import {
    faStar as faStarSolid
  } from '@fortawesome/free-solid-svg-icons';

class OverAllRatings extends React.Component {

    render() {
    const rating = this.props.rating;
      return (
        <div>
           <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStarRegular} />}
            fullSymbol={<FontAwesomeIcon icon={faStarSolid} />}
            fractions={100}
            readonly
            />
        </div>
      )
    }
  }


export default OverAllRatings