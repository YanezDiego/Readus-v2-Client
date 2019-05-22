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
        axios.get("https://api.nytimes.com/svc/topstories/v2/technology.json?&api-key=sQo1VZ2GSMGZ3VpeUALwbbGWAtos4TgI")
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
            <TopStoriesList stories = {this.state.stories}/>
            </div>
        )
    }



}

export default TopStoriesContainer