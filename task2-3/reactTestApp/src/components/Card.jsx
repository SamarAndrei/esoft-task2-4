import React from "react";

export const Card = ({props}) => {
    return(
        <div className='Card'>
            <img src = {props.url}/>
            <h2>{props.text}</h2>
            <h3>{props.progress}</h3>
        </div>
    )
}