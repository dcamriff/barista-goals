import styled from 'styled-components'

export const NavContainer = styled.div`
background-color: #131919;
/* border: solid 1px green; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px;
height: 100px;
width: 100vw;
position: fixed;
`

export const LogoContainer = styled.div`
margin: 30px;

img {
    height: 60px;
}

:hover {
    transform: scale(1.1);
    transition-duration: 2s;
    transition-timing-function: ease;
}
`
export const NavCenterTextContainer = styled.div`
color: whitesmoke;
font-size: 1.2em;

`

export const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
a {
    text-decoration: none;
    padding: 0 15px;
    color: white;
}
img {
    height: 55px;
    margin-right: 20px;
}
`

// Logo: espresso by Ben Didier from the Noun Project