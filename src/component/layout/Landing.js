import React, { Component }from 'react'
import { Link } from 'react-router-dom'


class Landing extends Component{
    render(){
        return(
            <div 
            className="container">
                <h4 
                style = {{
                    fontFamily: "helvetica",
                    paddingTop: '30px',
                    paddingBottom: '30px'
                }} 
                className = "center grey-text text-darken-3"> Welcome to <b> Readus </b></h4>

            <p style={{
                fontFamily: "helvetica"
            }}
            className = "flow-text balck-text">
                Getting the articles that are important in the tech world, the most shared, and lastly <b>movies</b>!
            </p>

            <Link to ="/signup" className= "btn float center waves-effect waves-light">Sign Up</Link>
            </div>
        )
    }
}

export default Landing

