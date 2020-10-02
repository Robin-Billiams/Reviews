import React from 'react'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faSquare as faSquareSolid
  } from '@fortawesome/free-solid-svg-icons';

  function SideBars(props) {


    return (
        <div className="grid-container-Ratings">
            <div className="grid-container-Ratings-Spacing">
            <div className="ratingsText"> Features</div>
                <Rating
                    initialRating={props.ratings.Features}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#ccc"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "yellow"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-Spacing">
                <div className="ratingsText"> Performance</div>
                <Rating
                    initialRating={props.ratings.Performance}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#ccc", margin: "0px"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "yellow"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-Spacing">
            <   div  className="ratingsText"> Desing</div>
                <Rating
                    initialRating={props.ratings.Desing}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#ccc"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "yellow"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-Spacing">
                <div className="ratingsText"> Value</div>
                <Rating
                    initialRating={props.ratings.Value}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#ccc"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "yellow"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
        </div>
    )
  }




  export default SideBars