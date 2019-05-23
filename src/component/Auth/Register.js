import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Register extends Component {
    constructor(){
        super()
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            error: {}
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

            const newUser = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
        }
        console.log(newUser)
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
                            <b>Register</b> Bellow
                        </h4>
                        <p classNmae="grey-text text-darken-1">
                            Already have an account? <Link to="/login">Log In</Link>
                        </p>
                    </div>

                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="input-field col s12">
                        <input onChange={this.onChange}
                        value={this.state.first_name}
                        id = "first_name"
                        type="text"/>
                        
                        <label htmlFor="name">First Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input onChange={this.onChange}
                        value={this.state.last_name}
                        id="last_name"
                        type="text"/>
                        
                        <label htmlFor="name">Last Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input onChange={this.onChange}
                              value={this.state.email}
                              id="email"
                              type="email"/>
                          
                        <label htmlFor="email">Email</label>
                      </div>  
                     <div className="input-field col s12">
                        <input onChange={this.onChange}
                              value={this.state.username}
                              id = "username"
                              type="text"/>
                          
                        <label htmlFor="email">username</label>
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

export default Register