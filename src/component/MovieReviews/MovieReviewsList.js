import React, { Component } from 'react'

import MovieReview from './MovieReview'
class MovieReviewsList extends Component {

    renderMovies = () => {
       return this.props.movies.map( (movie) => <MovieReview key= { movie['date_updated'] } movie = {movie}/>)
    }


    render(){
        return(
            <div className = "row">
                {this.renderMovies()}
            </div>
        )
    }



}

export default MovieReviewsList