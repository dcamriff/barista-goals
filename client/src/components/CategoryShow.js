import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CategoriesList from './CategoriesList'
import FieldNotesList from './FieldNotesList'
import { PageHeader, CategoryShowOneContainer, CategoryImageContainer, CategoryInfoContainer, SideNote, FieldNoteSingleContainer, FieldNoteContainer } from './styled-components/Containers'

class CategoryShow extends Component {
    state = {
        category: "",
        field_notes: []
    }

    getCategoryInfo = () => {
        axios.get(`/api/categories/${this.props.match.params.id}`)
        .then((res) => {this.setState({category: res.data})})
    }

    getFieldNotes = () => {
        axios.get(`/api/categories/${this.props.match.params.id}/field_notes`)
        .then((res) => {this.setState({field_notes: res.data})})
    }

    componentWillMount() {
        this.getCategoryInfo()
        this.getFieldNotes()
        // console.log(this.props)
    }
    render() {
        console.log(this.state.field_notes)
        return (
            <div>
                <div><PageHeader><h1>Field Notes</h1></PageHeader></div>
                
                <CategoryShowOneContainer>
                    <CategoryImageContainer>
                        <img src={this.state.category.image} alt={this.state.category.title}/>
                    </CategoryImageContainer>
                    <CategoryInfoContainer>
                    <div><h2>{this.state.category.name}</h2></div>
                    <div><p>{this.state.category.description}</p></div>
                    <SideNote><p>Barista Goals <span>field notes</span> is a learning resource for passionate baristas. Share the knowledge!</p></SideNote>
                    <br/>
                    <Link to="/categories">back to all categories</Link>
                    </CategoryInfoContainer>
                </CategoryShowOneContainer>
                
                <div>
                    <FieldNotesList field_notes={this.state.field_notes}/>
                </div>
            </div>
        )
    }
}

export default CategoryShow