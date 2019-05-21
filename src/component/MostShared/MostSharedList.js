import React, { Component } from 'react'

import MostShared from './MostShared'
import { maxHeaderSize } from 'http';


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
                <div 
                className = 'row' 
                style={{
                    WebkitPaddingStart: "55px",
                    WebkitPaddingEnd: "100px"

                }}>
                        {this.renderMostShared()}
                </div>

            </>    
        )
    }

}

export default MostSharedList