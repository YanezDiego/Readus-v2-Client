import React, { Component } from 'react'
import axios from 'axios'

import TopStoriesList from '../component/TopStories/TopStoriesList'

class TopStoriesContainer extends Component {
    constructor(){
        super()
        this.state = {
            topStories: []
        }
    }

    getTopStories = () => {
        axios.get("")
        .then(resp => this.setState({
            topStories: resp.data.results
        }))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getTopStories()
    }
    


    render(){
        return(
            <div>
                <TopStoriesList stories={this.state.topStories}/>
            </div>
        )
    }



}

export default TopStoriesContainer