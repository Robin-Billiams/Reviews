import React from 'react'
import Rating from 'react-rating';
import {gridContainerRatingsSide, gridContainerRatingsSpacing, ratingsTextSide} from '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faSquare as faSquareSolid
  } from '@fortawesome/free-solid-svg-icons';

  function SideBars(props) {


    return (
        <div className={gridContainerRatingsSide}>
            <div className={gridContainerRatingsSpacing}>
            <div className={ratingsTextSide}> Features</div>
                <Rating
                    initialRating={props.ratings.Features}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsSpacing}>
                <div className={ratingsTextSide}> Performance</div>
                <Rating
                    initialRating={props.ratings.Performance}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece", margin: "0px"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsSpacing}>
            <   div  className={ratingsTextSide}> Design</div>
                <Rating
                    initialRating={props.ratings.Design}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.1)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsSpacing}>
                <div className={ratingsTextSide}> Value</div>
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