import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'qpQLIGkWeMB86ZaBGTQOaPjTuidwKQgZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    search = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(json => this.setState({ reviews: json.results}))
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.search}/>
                    <button type='submit'>Submit</button>
                    <MovieReviews reviews={this.state.reviews}/>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;