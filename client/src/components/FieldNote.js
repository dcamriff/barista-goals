import React from 'react'
import {Link} from 'react-router-dom'

const FieldNote = (props) => {

    return (
        <div>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.memo}</p>
                <p>{props.year}</p>
                <p>{props.tags}</p>
            </div>
        </div>

    )
}

export default FieldNote