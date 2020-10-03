import React from 'react'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faSquare as faSquareSolid
  } from '@fortawesome/free-solid-svg-icons';

function AverageCustomerReviews(props) {
    console.log(props)
    let ratings ={1:0, 2:0, 3:0, 4:0, 5:0}
    let ratingCalc =()=> {
        props.currentList.map(item => {
            let num = 0
            num += item.ratings.Design
            num += item.ratings.Features 
            num += item.ratings.Performance
            num += item.ratings.Value
            num = num/4
            console.log(num)
            ratings[Math.ceil(num)]++
        })
    }
    ratingCalc()
    console.log(ratings)
    console.log((ratings[3]/props.currentList.length)*5)
   return(
    <div className="grid-container-★">
        <div className="grid-container-Ratings-★">
            <div className="grid-container-Ratings-overall-text"> 5 ★</div>
            <div className="centerContent">
                <Rating
                    initialRating={(ratings[5]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"}}/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-overall-text">{ratings[5]}</div>
        </div>
        <div className="grid-container-Ratings-★">
            <div className="grid-container-Ratings-overall-text"> 4 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[4]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece", margin: "0px"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-overall-text">{ratings[4]}</div>
        </div>
        <div className="grid-container-Ratings-★">
            <div className="grid-container-Ratings-overall-text"> 3 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[3]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-overall-text">{ratings[3]}</div>
        </div>
        <div className="grid-container-Ratings-★">
            <div className="grid-container-Ratings-overall-text"> 2 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[2]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-overall-text">{ratings[2]}</div>
        </div>
        <div className="grid-container-Ratings-★">
            <div className="grid-container-Ratings-overall-text"> 1 ★</div>
            <div>
                <Rating
                    initialRating={(ratings[1]/props.currentList.length)*5}
                    emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#cecece"}}/>}
                    fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(1.1,0.2)", color: "#fdd361"} }/>}
                    fractions={1000}
                    readonly
                />
            </div>
            <div className="grid-container-Ratings-overall-text">{ratings[1]}</div>
        </div>
    </div>
    )
}





export default AverageCustomerReviews