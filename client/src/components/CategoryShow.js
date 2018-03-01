import React, { Component } from 'react'
import axios from 'axios'

import CategoriesList from './CategoriesList'
import { FieldNoteSingleContainer, FieldNoteContainer } from './styled-components/Containers'

class CategoryShow extends Component {
    state = {
        category: "",
        field_notes: []
    }

    getCategoryInfo = () => {
        axios.get(`/api/categories/${this.props.match.params.id}`)
        .then((res) => {this.setState({category: res.data})})
    }

    componentWillMount() {
        this.getCategoryInfo()
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div>Category Container
                    <div>
                        <img src={this.state.category.image} alt={this.state.category.title}/>
                    </div>
                    <div><h2>Cat Name</h2></div>
                    <div><p>Cat Type</p></div>
                    <div><p>Description</p></div>
                </div>
                
            </div>
        );
    }
}

export default CategoryShow