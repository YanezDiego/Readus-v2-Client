import React, { Component } from 'react'
import axios from 'axios'


import MostSharedList from '../component/MostShared/MostSharedList'


class MostSharedContainer extends Component {
    constructor(){
        super();
        this.state = {
            mostShared: []
        }
    }

    getMostShared = () => {
        axios.get(`https://api.nytimes.com/svc/mostpopular/v2/mostshared/technology/30.json?
        &api-key`)
        .then(resp => this.setState({
            mostShared: resp.data.results
        }))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getMostShared()
    }



    render(){
        return(
            <div>
            <MostSharedList mostShared={this.state.mostShared}/>
            </div>
        )
    }

}

export default MostSharedContainer