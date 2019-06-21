import React from 'react'


const TopStorie = (props) => {

    let image = props.storie["multimedia"].length > 1 ? props.storie["multimedia"][3]["url"] : null

    return(
         <div className = 'col s12 m6 l4'>
            <div className='card hoverable'>
                <div className='card-image waves-effect waves-block waves-light'>
 
                    <img width = "" className= "activator" src = { `${ image }`}/>
                    <a className = "waves-effect right waves-light btn blue-grey lighten-5" > <i className = "material-icons red-text"> add </i></a>
                </div>
                <div className = "card-content">
                    <span 
                    className = "card-title truncate activator black-text"
                    style={{
                        fontSize: '25px'
                    }}> 
                        <i className = "material-icons right" > more_vert </i>
                        { props.storie["title"] }
                    </span>
                    <p className = "truncate activator">{props.storie["abstract"]}</p>
                </div>
                <div className = "card-reveal">
                   <span className = "card-title black-text">
                        <i className = "material-icons right"> close </i>
                        <a href={`${props.storie["short_url"]}`}>{ props.storie["title"] }</a>
                   </span>
                   <p> { props.storie["abstract"] }</p>
                   <p> <b> { props.storie["byline"] } </b> </p>
                </div>
            </div>
        </div>       
    )
}

export default TopStorie