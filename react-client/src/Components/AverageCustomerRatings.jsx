import React from 'react'
import Rating from 'react-rating';
import FeaturesOverall from './FeaturesOverall.jsx'
import AverageCustomerReviews from './AverageCustomerReviews.jsx'
import {gridContainerShare, bold, shareButton, gridContainerAverageCustomerRatingsTopComponent, averageCustomerRating, gridContainerAverageCustomerRatings} from '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar as faStarSolid
  } from '@fortawesome/free-solid-svg-icons';

function AverageCustomerRatings(props) {
    return (
        <div>
            <div className={gridContainerShare}>
                <div className={bold} style={{fontSize: "30px", fontFamily: "Arial"}}>Reviews</div> 
                <button className={shareButton}>SHARE YOUR PRODUCT EXPERIENCE</button>
            </div>
            <div className={gridContainerAverageCustomerRatingsTopComponent}>
                <div>
                    <div>
                        <div className={averageCustomerRating} style={{marginBottom: "10px"}}>
                            Ratings Snapshot
                        </div>
                        <div className={averageCustomerRating} style={{marginBottom: "10px"}}>
                            Select a row below to filter reviews.
                        </div>
                        <AverageCustomerReviews currentList ={props.currentList}/>
                    </div>
                </div>
                <div>
                    <div className={averageCustomerRating}>
                        Average Customer Ratings
                    </div>
                    <div className={gridContainerAverageCustomerRatings}> 
                        <div className={averageCustomerRating}>
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
                        <div className={averageCustomerRating}>
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