const axios = require('axios');
import React from 'react';
import ReactDOM from 'react-dom';
import OverAllRatings from './Components/OverAllRatings.jsx';
import SearchBar from './Components/SearchBar.jsx'

class ReviewsModule extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            listNumber: 1,
            currentList: [],
            reviewsLoaded: false,
            rating: 1
        }
    }

    listNumberGenerator() {
        console.log("loop back around to maybe parse the url?")
    }

    componentDidMount() {
        axios.get('/productID', {params:{"productID": this.state.listNumber}})
        .then(
            (response) => {
                let rate = 0
                function ratingGen () {
                    response.data.map(rating => {
                        let overall = 0;
                        overall += rating.ratings.Design
                        overall += rating.ratings.Features
                        overall += rating.ratings.Performance
                        overall += rating.ratings.Value
                        rate += overall/4
                    })
                    rate = (rate/response.data.length).toFixed(1)
                }
                ratingGen()
                this.setState({
                    reviewsLoaded: true,
                    currentList: response.data, 
                    rating: rate
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
                    <OverAllRatings rating={this.state.rating} currentList={this.state.currentList}/>
                    <SearchBar/>
                    <div>
                        <div>Reviews</div>
                        <div>two conatiners with number of reviews for each star on the left, and avergae custome ratings</div>
                    </div>
                    <div>
                        <div>list of reviews and side element got features rating
                            <div>star rating, author, time ago</div>
                            <div>title</div>
                            <div>body</div>
                            <div>helpful? yes or no</div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


ReactDOM.render(<ReviewsModule/>, document.getElementById('Reviews'))