import React, { Component } from 'react'
import axios from 'axios'

import CategoriesList from './CategoriesList'
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

    componentWillMount() {
        this.getCategoryInfo()
        console.log(this.props)
    }
    render() {
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
                    </CategoryInfoContainer>
                </CategoryShowOneContainer>
                
            </div>
        );
    }
}

export default CategoryShow