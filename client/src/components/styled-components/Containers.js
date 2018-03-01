import styled from 'styled-components'

import SplashImg from './img/splash.jpg'

export const Container = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex: 1 0 auto;
text-align: center;

@media only screen and (min-width: 1024px) {
    margin-left: 12vw;
}
`

export const PhotoHeaderContainer = styled.div`
    position: absolute;
    z-index: +1;   
`

export const SplashContainer = Container.extend`
flex-direction: column;
justify-content: center;
background: url(${SplashImg}) center no-repeat;
background-size: cover;

@media (min-width: 1025px) {
    width: 75vw;
}
`
export const PhotoCenteringContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const CatHeaderContainer = PhotoHeaderContainer.extend`
a {
    text-decoration: none;
    color: white;
}
`

export const HomePageText = styled.div`
margin-top: .1vh;
color: whitesmoke;
`

export const LoginContainer = styled.div`
/* position: absolute; */
margin-top: 350px;
`
// Credit: SplashImg Photo by Nathan Dumlao on Unsplash

// PRODUCTS

export const ProductsContainer = styled.div`
width: 80vw;
margin-top: 75px;
justify-content: center;
align-items: center;
`

export const SingleProductContainer = styled.div`
display: flex;

justify-content: space-between;

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: solid #774222 1px;
    margin: 5px;

}
`
export const ItemName = styled.p`
font-weight: bold;
`
export const Description = styled.p`
font-style: italic;
`
export const Price = styled.p`
font-weight: bold;
`

export const OrderItemsContainer = styled.div`
width: 80vw;
margin-top: 75px;
justify-content: center;
align-items: center;
`

export const CategoriesListContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding-top: 100px;

`
export const CategoryContainer = PhotoCenteringContainer.extend`
    font-size: 4.75em;
    color: white;
    border: solid 1px white;
    text-shadow: 1px 1px rgba(0,0,0, 0.50);   
    @media only screen and (max-width: 787px){
        font-size: 3em
    
    }

    @media only screen and (max-width: 600px){
        font-size: 2.5em
    
    }
`

export const PageHeader = styled.div`
display: flex;
justify-content: space-around;
padding-top: 100px;
h1 {
}
`
export const CategoryShowOneContainer = styled.div`
background-color: lightgoldenrodyellow;
display: flex;
justify-content: flex-start;
@media (max-width: 414px){
        flex-wrap: wrap;
    }

`
export const CategoryImageContainer = styled.div`
width: 50vw;

img {
    width:50vw;
    @media (max-width: 414px){
        width: 100vw;
    }
}
`
export const CategoryInfoContainer = styled.div`
padding: 4px;
span {
    font-style: italic;
}`

export const SideNote = styled.div`
margin-top: 20px;
font-size: .8em;
`
export const FieldNoteSingleContainer = styled.div`
background-color: lightgray;
img {
    width: 100px;
    border-radius: 50%;
}
`

export const FieldNotesContainer = styled.div`
background-color: lightgoldenrodyellow;
display: flex;
justify-content: flex-start;
@media (max-width: 414px){
        flex-wrap: wrap;
    }
`
