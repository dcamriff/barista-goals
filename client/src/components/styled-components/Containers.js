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
margin-top: 400px;
`
// Credit: SplashImg Photo by Nathan Dumlao on Unsplash

export const LoginFormInput = styled.input`
width: 250px;
height: 30px;
margin-top: 15px;
border-top-left-radius: 7px;
border-top-right-radius: 7px;
`

export const Button = styled.input`
width: 75px;
text-decoration: none;
background-color: whitesmoke;
}
`

export const AddNewFormInput = styled.input`
width: 250px;
/* height: 25px; */
margin-top: 2px;
border-top-left-radius: 7px;
border-top-right-radius: 7px;
`

export const CategoriesListContainer = styled.div `
display: flex;
flex-wrap: wrap;
padding-top: 100px;
img {
    @media (max-width: 375px){
        width: 100vw;
    }
}

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
border-bottom: solid 2px #774222;
h1 {
}
`
export const CategoryShowOneContainer = styled.div`
display: flex;
justify-content: flex-start;
@media (max-width: 414px){
        flex-wrap: wrap;
    }

`
export const CategoryImageContainer = styled.div`
/* width: 50vw; */

img {
    width:50vw;
    @media (max-width: 414px){
        width: 100vw;
    }
}
`
export const CategoryInfoContainer = styled.div`
margin-left: 15px;
margin-right: 15px;
a {
    text-decoration: none;
    color: #774222;
    :hover {
    transform: scale(1.1);
    transition-duration: 2s;
    transition-timing-function: ease;
}
}

p {
    padding: 4px;
}

span {
    font-style: italic;
}`

export const SideNote = styled.div`
margin-top: 10px;
font-size: .8em;
`
export const FieldNoteSingleContainer = styled.div`
margin: 15px;
img {
    width: 100px;
    border-radius: 50%;
}
`

export const FieldNotesContainer = styled.div`
/* background-color: lightgoldenrodyellow; */
background-color: #DDEDE8;
display: flex;
justify-content: flex-start;
margin: 15px;
@media (max-width: 414px){
        flex-wrap: wrap;
    }
`
export const BelongsToUserContainer = styled.div`
display: flex;
flex-direction: column;
border-right: whitesmoke solid 3px;
margin: 5px;
color: #774222;
width: 150px;
img {
    border-radius: 3px;
}
`

export const FieldNoteTextWrapper = styled.div`
width: 80vw;
`

export const FieldNoteInfoContainer = styled.div`
text-align: left;
`

// PencilIcon: edit by Ralf Schmitzer from the Noun Project
// TrashIcon: Trash by Ralf Schmitzer from the Noun Project