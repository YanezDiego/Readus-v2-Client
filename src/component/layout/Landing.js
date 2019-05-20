import React, { Component }from 'react'


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
            </div>
        )
    }
}

export default Landing

