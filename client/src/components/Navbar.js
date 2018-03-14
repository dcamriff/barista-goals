import React from 'react'
import TampLogo from './styled-components/img/tamp-white.svg'
import PersonIcon from './styled-components/img/person2.png'
// import { LogOutContainer } from './styled-components/Containers' import {
// LogOutButton } from './styled-components/Form'
import {NavContainer, LogoContainer, NavCenterTextContainer, LinksContainer} from './styled-components/NavStyle'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <NavContainer>
            <LogoContainer>
                <Link to="/"><img src={TampLogo} alt="barista goals logo"/></Link>
            </LogoContainer>
            <NavCenterTextContainer>
                <Link to="/categories">
                    <div>Barista Goals</div>
                </Link>
            </NavCenterTextContainer>

            {localStorage.userId ? 
            <LinksContainer>
                <Link to="/">Log Out</Link>
            </LinksContainer> :
            
            <LinksContainer>
            <Link to = "/login" > <img src={PersonIcon} alt="barista goals logo"/></Link>
            </LinksContainer>
             } 
        </NavContainer>
    )
}

export default NavBar

// TampLogo: espresso by Ben Didier from the Noun Project