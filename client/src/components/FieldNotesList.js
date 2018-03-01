import React from 'react'
import FieldNote from './FieldNote'
// import FieldNotesGallery from './FieldNotesGallery'

const FieldNotesList = (props) => {
    const field_notes = props.field_notes || []
    const fieldNotesList = field_notes.map((field_note, index)=>{
        return (
        <FieldNote category = {field_note.category} 
        user = {field_note.user} 
        title = {field_note.title}
        memo = {field_note.memo}
        image = {field_note.image}
        categoryId = {field_note.category_id}
        userId = {field_note.id}
        //deleteFieldNote = {props.deleteFieldNote}
        key = {index} 
        //showEditFormState = {props.showEditFormState} 
        //showEditForm = {props.showEditForm}
        />
        )
    })
    // const gallery = props.field_notes.map((field_note, index)=>{
    //     return (
    //     <FieldNotesGallery 
    //     image = {field_note.image}
    //     categoryId = {field_note.category_id}
    //     postId = {field_note.id}
    //     key = {index} 
    //     />
    //     )
    // })
    return(
        <div>
            {fieldNotesList}
            {/* {props.viewPostGallery ? <div>{gallery}</div> : <div>{fieldNotesList}</div>} */}
            
    
            
        </div>
    )
}

export default FieldNotesList