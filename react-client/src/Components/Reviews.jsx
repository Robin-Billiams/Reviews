import React from 'react';
var moment = require('moment');
import Rating from 'react-rating';
import Sidebars from './Sidebars.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar as faStarSolid
  } from '@fortawesome/free-solid-svg-icons';


function Reviews(props) {
    console.log(props)
    return (
        <div>
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
                console.log(review.ratings)
                return (
                    <div key={index}>
                        <div className="grid-container-reviews-top">
                            <div>
                                <Rating
                                initialRating={rate}
                                emptySymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "#ccc"}}/>}
                                fullSymbol={<FontAwesomeIcon icon={faStarSolid} style={{color: "yellow"}}/>}
                                fractions={1000}
                                readonly
                                />
                            </div>
                            <div>{review.author}</div>
                            <div className="grayFont"> {moment(review.createdAt).fromNow()}</div>
                        </div>
                        <div className="capitalize">{review.title}</div>
                        <div className="grid-container-Ratings-Body">
                            <div className="grayFont">{review.body}</div>
                            <Sidebars ratings = {review.ratings}/>
                        </div>
                        <div className="grid-container-helpful"> 
                            <div >Helpful?</div>
                            <button className="helpfulButtons">Yes . {<span style={{color: "red"}}> {review.yes} </span>}</button>
                            <button className="helpfulButtons">No . {<span style={{color: "red"}}> {review.no} </span>}</button>
                            <button className="helpfulButtons">Report</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}


export default Reviews