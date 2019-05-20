import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    render(){
        return(
            <div className= "navbar-fixed">
            <nav className = "z-depth-0 grey lighten-5" >
            <Link to = '/'
            style = {{
                fontFamily: 'monospace',
                paddingLeft: "15px"
            }} 
             className="black-text"> Home </Link>
            <Link to='/mostshared'
            style = {{
                fontFamily: 'monospace',
                paddingLeft: "15px"
                }} 
            className ='black-text'> Most Shared </Link>
            </nav>
            </div>
        )
    }
}

export default NavBar