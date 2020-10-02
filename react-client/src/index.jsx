const axios = require('axios');
import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Components/Reviews.jsx'

class ReviewsModule extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            listNumber: 1,
            currentList: [],
            reviewsLoaded: false
        }
    }

    listNumberGenerator() {
        console.log("loop back around to maybe parse the url?")
    }

    componentDidMount() {
        axios.get('/productID', {params:{"productID": this.state.listNumber}})
        .then(
            (response) => {
                console.log('this is the current response:', response)
                this.setState({
                    reviewsLoaded: true,
                    currentList: response 
                });
            },
            (error) => {
                this.setState({
                    reviewsLoaded:true,
                    error
                })
            }
        )
    }



    render() {
        if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>
        } else {
            return (
                <div> 
                    <div>overall rating,starts, line, number of reviews</div>
                    <div>search bar</div>
                    <div>
                        <div>Reviews</div>
                        <div>two conatiners with number of reviews for each star on the left, and avergae custome ratings</div>
                    </div>
                    <div>
                        <Reviews/>
                    </div>
                </div>
            )
        }
    }
}


ReactDOM.render(<ReviewsModule/>, document.getElementById('Reviews'))