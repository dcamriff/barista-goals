import React from 'react'
import { Link } from 'react-router-dom'
import { FieldNotesContainer, FieldNoteSingleContainer, FieldNoteInfoContainer, FieldNoteTextWrapper, BelongsToUserContainer } from './styled-components/Containers'
import { ProfilePicSmall, IconSmall } from './styled-components/Images'
import EditIcon from './styled-components/img/edit-icon.png'

const FieldNote = (props) => {
    return (
        
        <FieldNotesContainer>
            <BelongsToUserContainer>
                <h3>{props.user.username}</h3>
                <div>
                    <ProfilePicSmall src={props.user.picture} alt={props.user.firstname}/>
                </div>
            </BelongsToUserContainer>

            <FieldNoteSingleContainer>
                <img src={props.image} alt={props.title}/>
            </FieldNoteSingleContainer>
            <FieldNoteTextWrapper>
                <FieldNoteInfoContainer>
                <h3>{props.title}</h3>
                <p>{props.user_id}</p>
                <p>{props.memo}</p>
                <p>{props.year}</p>
                <p>{props.tags}</p>
                </FieldNoteInfoContainer>
            </FieldNoteTextWrapper>
            <div>
                <div>
                    <Link to="/">
                    <IconSmall src={EditIcon} alt="edit"/>
                    </Link>
                </div>
            </div>
        </FieldNotesContainer>

    )
}

export default FieldNote