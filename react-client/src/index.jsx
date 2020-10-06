const axios = require('axios');
import React from 'react';
import ReactDOM from 'react-dom';
import OverAllRatings from './Components/OverAllRatings.jsx';
import SearchBar from './Components/SearchBar.jsx'
import Reviews from './Components/Reviews.jsx'
import AverageCustomerRatings from './Components/AverageCustomerRatings.jsx'

class ReviewsModule extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            listNumber: 0,
            currentList: [],
            reviewsLoaded: false,
            rating: 5
        }
    }


    componentDidMount() {
        let prodId = this.state.listNumber
        if(window.location.search) {
            console.log('this is the location', window.location.search.slice(1))
            prodId = window.location.search.slice(1)
        }
        axios.get('/productID', {params:{"productID": prodId}})
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

    helpfullClick(param, item) {
        console.log(param, item)
        axios.patch('/productID',{"updateValue": {"_id": item, "updateVal": param}})
        .then(response => {
            console.log(response)
        })
    }



    render() {
        if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>
        } else {
            return (
                <div className="top-Container"> 
                    <OverAllRatings rating={this.state.rating} currentList={this.state.currentList}/>
                    <SearchBar/>
                    <div>
                        <AverageCustomerRatings currentList={this.state.currentList} rating={this.state.rating}/>
                    </div>
                    <div>
                        <Reviews helpfullClick={this.helpfullClick.bind(this)} reviews={this.state.currentList}/>
                    </div>
                </div>
            )
        }
    }
}


ReactDOM.render(<ReviewsModule/>, document.getElementById('Reviews'))