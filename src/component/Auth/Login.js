import React, { Component } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import { async } from "q";
class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        const {email, password} = this.state
        e.preventDefault()

        this.sendLogin(email, password)
    }


    sendLogin = async(email, password) => {
        console.log(email, password)
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">backspace</i>Back to Home
                        </Link>
                    <div className="col s12" style={{
                        paddingLeft: "11.250px"
                    }}>
                        <h4>
                            <b>Login</b> Bellow
                        </h4>
                        <p classNmae="grey-text text-darken-1">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>

                    <form noValidate onSubmit={this.onSubmit}>
                      
                      <div className="input-field col s12">
                        <input onChange={this.onChange}
                              value={this.state.email}
                              id="email"
                              type="email"/>
                          
                        <label htmlFor="email">Email</label>
                      </div>  
                     
                      <div className="input-field col s12">
                        <input onChange={this.onChange}
                            value={this.state.password}
                            id="password"
                            type="password"/>
                          
                        <label htmlFor="password">Password</label>
                        <button className="btn">Submit</button>
                      </div>
                        
                    </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login