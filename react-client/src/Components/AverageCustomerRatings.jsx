import React from 'react'
import Rating from 'react-rating';
import FeaturesOverall from './FeaturesOverall.jsx'
import AverageCustomerReviews from './AverageCustomerReviews.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar as faStarSolid
  } from '@fortawesome/free-solid-svg-icons';

function AverageCustomerRatings(props) {
    return (
        <div>
            <div className="grid-container-Share">
                <div className="bold" style={{fontSize: "30px", fontFamily: "Arial"}}>Reviews</div> 
                <button className="share-button">SHARE YOUR PRODUCT EXPERIENCE</button>
                
            </div>
            <div className="grid-container-Average-Customer-Ratings-top-component">
                <div>
                    <div>
                        <div className="average-Customer-Rating" style={{marginBottom: "10px"}}>
                            Ratings Snapshot
                        </div>
                        <div className="average-Customer-Rating" style={{marginBottom: "10px"}}>
                            Select a row below to filter reviews.
                        </div>
                        <AverageCustomerReviews currentList ={props.currentList}/>
                    </div>
                </div>
                <div>
                    <div className="average-Customer-Rating">
                        Average Customer Ratings
                    </div>
                    <div className="grid-container-Average-Customer-Ratings"> 
                        <div className="average-Customer-Rating">
                            Overall    
                        </div>  
                        <div>
                            <Rating
                                initialRating={props.rating}
                                emptySymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#cecece"}}/>}
                                fullSymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#fdd361"}}/>}
                                fractions={1000}
                                readonly
                            />        
                        </div>
                        <div className="average-Customer-Rating">
                            {props.rating}
                        </div>
                    </div>
                    <div>
                        <FeaturesOverall currentlist ={props.currentList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AverageCustomerRatings