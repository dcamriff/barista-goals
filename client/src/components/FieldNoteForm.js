import React, { Component } from 'react'
import axios from 'axios'

import { AddNewFormInput } from './styled-components/Containers'

class FieldNoteForm extends Component {

    state = {
        newFieldNote: {
            user_id : localStorage.userId,
            category_id : this.props.category_id,
        }, 
        category_id : this.props.category_id
    }

    handleChange = (event) => {
        const attributeName = event.target.name
        let attributeValue = event.target.value
        const newFieldNote = {...this.state.newFieldNote}
        newFieldNote[attributeName] = attributeValue
        this.setState({newFieldNote})
    }

    resetForm = () => {
        const newFieldNote = {...this.state.newFieldNote}
        this.setState({newFieldNote, redirect: true})
    }

    createNote(event){
        this.props.showFieldNoteForm()
        event.preventDefault()
        axios.post(`/api/categories/${this.state.category_id}/field_notes`, this.state.newFieldNote)
        .then((res) => { this.props.getFieldNotes()})
        .catch((error) => {console.log(error)}) 
    }


    showFieldNoteForm = () => {
        this.props.showFieldNoteForm()
    }


    render() {
        return (
            <div>
                <h2>add a field note</h2>
                <form onSubmit={this.createNote.bind(this)}>
                    <div>
                    <AddNewFormInput type="text" name="title" placeholder="title" oncChange={this.handleChange}/>
                    <AddNewFormInput type="textarea" name="memo" placeholder="note" oncChange={this.handleChange}/>
                    <AddNewFormInput type="integer" name="year" placeholder="year" oncChange={this.handleChange}/>
                    <AddNewFormInput type="text" name="tags" placeholder="tags" oncChange={this.handleChange}/>
                    <div>
                    <input type="submit" value="add"/>
                    </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default FieldNoteForm

