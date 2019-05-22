import React from 'react'
 

const MostShared = (props) => {
    return(
        <div className = 'col s12 m6 l4'>
            <div className='card hoverable'>
                <div className='card-image waves-effect waves-block waves-light'>
 
                    <img className= "activator" src = {`${props.shared['media'][0]["media-metadata"][2]['url']}`}/>
                    <a className = "waves-effect right waves-light btn blue-grey lighten-5" > <i className = "material-icons red-text"> add </i></a>
                </div>
                <div className = "card-content">
                    <span className = "card-title truncate activator black-text"> 
                        <i className = "material-icons right" > more_vert </i>
                        {props.shared["title"]}
                    </span>
                    <p className = "truncate activator">{props.shared["abstract"]}</p>
                </div>
                <div className = "card-reveal">
                   <span className = "card-title black-text">
                        <i className = "material-icons right"> close </i>
                        { props.shared["title"] }
                   </span>
                   <p> { props.shared["abstract"] }</p>
                   <p> <b> { props.shared["byline"] } </b> </p>
                </div>
            </div>
        </div>       
        
    )
}

export default MostShared