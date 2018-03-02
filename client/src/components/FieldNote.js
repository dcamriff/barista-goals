import React from 'react'
import { Link } from 'react-router-dom'
import { FieldNotesContainer, FieldNoteSingleContainer } from './styled-components/Containers'

const FieldNote = (props) => {
    return (
        <FieldNotesContainer>
            <FieldNoteSingleContainer>
                <img src={props.image} alt={props.title}/>
            </FieldNoteSingleContainer>
            <div>
                <h1>{props.user.username}</h1>
                <h3>{props.title}</h3>
                <p>{props.user_id}</p>
                <p>{props.memo}</p>
                <p>{props.year}</p>
                <p>{props.tags}</p>
            </div>
        </FieldNotesContainer>

    )
}

export default FieldNote