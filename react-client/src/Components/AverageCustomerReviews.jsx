import React from 'react'
import Rating from 'react-rating';
import {gridContainerStar, gridContainerRatingsStar, gridContainerRatingsOverallText, centerContent} from '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faSquare as faSquareSolid
  } from '@fortawesome/free-solid-svg-icons';

function AverageCustomerReviews(props) {
    let ratings ={1:0, 2:0, 3:0, 4:0, 5:0}
    let ratingCalc =()=> {
        props.currentList.map(item => {
            let num = 0
            num += item.ratings.Design
            num += item.ratings.Features 
            num += item.ratings.Performance
            num += item.ratings.Value
            num = num/4
            ratings[Math.ceil(num)]++
        })
    }
    ratingCalc()
   return(
    <div className={gridContainerStar}>
        <div className={gridContainerRatingsStar}>
            <div className={gridContainerRatingsOverallText}> 5 ★</div>
            <div className={centerContent}>
                <Rating
                    initialRating={(ratings[5]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"}}/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsOverallText}>{ratings[5]}</div>
        </div>
        <div className={gridContainerRatingsStar}>
            <div className={gridContainerRatingsOverallText}> 4 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[4]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece", margin: "0px"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsOverallText}>{ratings[4]}</div>
        </div>
        <div className={gridContainerRatingsStar}>
            <div className={gridContainerRatingsOverallText}> 3 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[3]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsOverallText}>{ratings[3]}</div>
        </div>
        <div className={gridContainerRatingsStar}>
            <div className={gridContainerRatingsOverallText}> 2 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[2]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsOverallText}>{ratings[2]}</div>
        </div>
        <div className={gridContainerRatingsStar}>
            <div className={gridContainerRatingsOverallText}> 1 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[1]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className={gridContainerRatingsOverallText}>{ratings[1]}</div>
        </div>
    </div>
    )
}





export default AverageCustomerReviews