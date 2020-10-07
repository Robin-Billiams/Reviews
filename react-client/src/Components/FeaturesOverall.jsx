import React from 'react'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {
    faSquare as faSquareSolid
  } from '@fortawesome/free-solid-svg-icons';
  
function FeaturesOverall(props) {
    let averageFeatureCalc = (feature) => {
        let num = 0
        if (props.currentlist.length > 0) {
            props.currentlist.map(item => {
                num+= item.ratings[feature]
            })
            num = (num/props.currentlist.length).toFixed(1)
        }
        return num
    }
      return (
        <div className="grid-container-Ratings">
            <div className="grid-container-Ratings-overall">
                <div className="grid-container-Ratings-overall-text"> Features</div>
                <div className="center-Content">
                    <Rating
                        initialRating={averageFeatureCalc('Features')}
                        emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#cecece"}}/>}
                        fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#fdd361"}}/>}
                        fractions={1000}
                        readonly
                    />
                </div>
                <div className="grid-container-Ratings-overall-text">{averageFeatureCalc('Features')}</div>
            </div>
            <div className="grid-container-Ratings-overall">
                <div className="grid-container-Ratings-overall-text"> Performance</div>
                <div>
                    <Rating
                        initialRating={averageFeatureCalc('Performance')}
                        emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#cecece", margin: "0px"}}/>}
                        fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#fdd361"} }/>}
                        fractions={1000}
                        readonly
                    />
                </div>
                <div className="grid-container-Ratings-overall-text">{averageFeatureCalc('Performance')}</div>
            </div>
            <div className="grid-container-Ratings-overall">
                <div className="grid-container-Ratings-overall-text"> Design</div>
                <div>
                    <Rating
                        initialRating={averageFeatureCalc('Design')}
                        emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#cecece"}}/>}
                        fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#fdd361"} }/>}
                        fractions={1000}
                        readonly
                    />
                </div>
                <div className="grid-container-Ratings-overall-text">{averageFeatureCalc('Design')}</div>
            </div>
            <div className="grid-container-Ratings-overall">
                <div className="grid-container-Ratings-overall-text"> Value</div>
                <div>
                    <Rating
                        initialRating={averageFeatureCalc('Value')}
                        emptySymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#cecece"}}/>}
                        fullSymbol={<FontAwesomeIcon icon={faSquareSolid} style={{ transform: "scale(0.99,0.2)", color: "#fdd361"} }/>}
                        fractions={1000}
                        readonly
                    />
                </div>
                <div className="grid-container-Ratings-overall-text">{averageFeatureCalc('Value')}</div>
            </div>
        </div>
    )
  }






  export default FeaturesOverall