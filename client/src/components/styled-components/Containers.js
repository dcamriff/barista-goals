import React from 'react'
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

export const SplashContainer = Container.extend`
flex-direction: column;
justify-content: center;
background: url(${SplashImg}) center no-repeat;
background-size: cover;

@media (min-width: 1025px) {
    width: 75vw;
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