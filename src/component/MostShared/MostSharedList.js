import React, { Component } from 'react'

import MostShared from './MostShared'



class MostSharedList extends Component {

    renderMostShared = () => {
        return this.props.mostShared.map((shared) =>{
            // debugger
           return <MostShared 
            key = {shared["asset_id"]}
            shared = {shared}/>
        })
    }


    render(){
        return(
           <>
                <div className = 'row'> 
                
                        {this.renderMostShared()}
                </div>

            </>    
        )
    }

}

export default MostSharedList