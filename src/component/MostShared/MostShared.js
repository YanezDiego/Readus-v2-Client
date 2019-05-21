import React from 'react'
 

const MostShared = (props) => {
    return(
        <div className = 'col s12  l6'>
            <div className='card hoverable'>
                <div className='card-image waves-effect waves-block waves-light'>
 
                    <img className= "activator" src = {`${props.shared['media'][0]["media-metadata"][2]['url']}`}/>
                    <a class = "waves-effect right waves-light btn blue-grey lighten-5" > <i class = "material-icons red-text"> add </i></a>
                </div>
                <div className = "card-content">
                    <span className = "card-title activator black-text"> 
                    {props.shared["title"]}
                    <i class = "material-icons right" > more_vert </i>
                    </span>
                    <p className="truncate activator">{props.shared["abstract"]}</p>
                </div>
                <div className="card-reveal">
                   <span className = "card-title black-text" >
                    <i class = "material-icons right"> close </i>
                   {props.shared["title"]} 
                   </span>
                   <p> {props.shared["abstract"]}</p>
                   <p><b>{props.shared["byline"]}</b></p>
                </div>
            </div>
        </div>       
        
    )
}

export default MostShared