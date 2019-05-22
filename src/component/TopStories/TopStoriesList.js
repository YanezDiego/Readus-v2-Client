import React, { Component } from 'react'

import TopStorie from './TopStorie'
class TopStoriesList extends Component{

    renderTopStories = () => {
        return this.props.stories.map((storie) => <TopStorie key={storie["published_date"]} storie={storie}/>) 
    }

    render(){
        return(
            <div className = 'row'>
                {this.renderTopStories()}
            </div>
        )
    }
}


export default TopStoriesList