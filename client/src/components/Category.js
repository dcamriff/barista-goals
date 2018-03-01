import React from 'react'
// import {CatHeaderContainer, CategoryContainer} from './styled-components/Containers'
import {CategoryImage} from './styled-components/Images'
import {Link} from 'react-router-dom'

const Category = (props) => {

    return (
        <div>
            <div>
                <Link to={`/categories/${props.categoryId}`}><CategoryImage src={props.image} alt={props.name}/>
                </Link>
                <p>{props.name}</p>
                {/* <p>{props.description}</p>
                <p>{props.cat_type}</p> */}
                
            </div>
        </div>
    )
}

export default Category