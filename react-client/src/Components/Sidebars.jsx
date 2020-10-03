import React from 'react'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faSquare as faSquareSolid
  } from '@fortawesome/free-solid-svg-icons';

  function SideBars(props) {


    return (
        <div className="grid-container-Ratings-Side">
            <div className="grid-container-Ratings-Spacing">
            <div className="ratings-Text-Side"> Features</div>
                <Rating
                    initialRating={props.ratings.Features}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-Spacing">
                <div className="ratings-Text-Side"> Performance</div>
                <Rating
                    initialRating={props.ratings.Performance}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece", margin: "0px"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-Spacing">
            <   div  className="ratings-Text-Side"> Design</div>
                <Rating
                    initialRating={props.ratings.Design}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-Spacing">
                <div className="ratings-Text-Side"> Value</div>
                <Rating
                    initialRating={props.ratings.Value}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
        </div>
    )
  }




  export default SideBars