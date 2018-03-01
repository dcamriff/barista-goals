import React, { Component } from 'react'
import Category from './Category'
import { CategoriesListContainer } from './styled-components/Containers'
import axios from 'axios'

class CategoriesList extends Component {
    
    render () {
        const categoriesList = this.props.categories.map((category, index) => {
        return (
            <Category 
            name={category.name} 
            cat_type={category.cat_type}
            description={category.description}
            image={category.image}
            active={category.active}
            key={index} 
            categoryId={category.id} />
            )
        })

        return (
            <div>
            <CategoriesListContainer>
                {categoriesList}
            </CategoriesListContainer>
            </div>
            
        ) 
    }
}

export default CategoriesList