import React from 'react'

const MovieReview = (props) => {


   let setMpaaRating = (props) => {
        if (props.movie["mpaa_rating"] === '' || props.movie["mpaa_rating"] === ""){
            return "Not Rated"
        } else {
            return props.movie["mpaa_rating"]
        }
    }

    return(
         <div className = 'col s12 m6 l4'>
            <div className='card hoverable'>
                <div className='card-image waves-effect waves-block waves-light'>
 
                    <img className= "activator" src = {`${props.movie["multimedia"]["src"]}`}/>
                    <a className = "waves-effect right waves-light btn blue-grey lighten-5" > <i className = "material-icons red-text"> add </i></a>
                </div>
                <div className = "card-content">
                    <span className = "card-title truncate activator black-text"> 
                        <i className = "material-icons right" > more_vert </i>
                        {props.movie["display_title"]}
                    </span>
                    <p className = "truncate activator">{ setMpaaRating(props) }</p>
                </div>
                <div className = "card-reveal">
                   <span className = "card-title black-text">
                        <i className = "material-icons right"> close </i>
                        <a href = {`${props.movie["link"]["url"]}`}> { props.movie["display_title"] } </a>
                   </span>
                   <p> { props.movie["summary_short"] }</p>
                   <p> <b>By: { props.movie["byline"] } </b> </p>
                </div>
            </div>
        </div>       
    )
}

export default MovieReview