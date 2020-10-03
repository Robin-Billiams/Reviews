import React from 'react';
var moment = require('moment');
import Rating from 'react-rating';
import Sidebars from './Sidebars.jsx'
import Helpfull from './Helpfull.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar as faStarSolid
  } from '@fortawesome/free-solid-svg-icons';


function Reviews(props) {
    function onClike() {
        console.log('hi')
    }
    return (
        <div className="Reviews-conatiner">
            {props.reviews.map((review, index)=> {
                let rate = 0
                function raterInd(){    
                    let overall = 0;
                    overall += review.ratings.Design
                    overall += review.ratings.Features
                    overall += review.ratings.Performance
                    overall += review.ratings.Value
                    rate += overall/4       
                    rate = (rate).toFixed(1)
                }
                raterInd()
                return (
                    <div key={index}>
                        <div className="grid-container-reviews-top">
                            <div>
                                <Rating
                                initialRating={rate}
                                emptySymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#cecece"}}/>}
                                fullSymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#fdd361"}}/>}
                                fractions={1000}
                                readonly
                                />
                            </div>
                            <div className="bold">{review.author}</div>
                            <div className="gray-Font"> {<span>&#183;</span>} {moment(review.createdAt).fromNow()}</div>
                        </div>
                        <div>
                            <div className="capitalize">{review.title}</div>
                            <div className="grid-container-Ratings-Body">
                                <div className="gray-Font-body" style={{fontSize: "15px"}}>{review.body}</div>
                                <Sidebars ratings = {review.ratings}/>
                            </div>
                        </div>
                        <Helpfull yes={review.yes} no={review.no} helpfullClick={props.helpfullClick} id={review._id}/>
                    </div>
                )
            })}
        </div>
    )
}


export default Reviews