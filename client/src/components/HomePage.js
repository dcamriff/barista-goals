import React, { Component } from 'react'
import { SplashImage } from './styled-components/Images'
import { SplashContainer, HomePageText, LoginContainer } from './styled-components/Containers'

class HomePage extends Component {
    render () {
        return (
            <div>
                <SplashContainer>
                    <div>
                    <HomePageText>Welcome</HomePageText>

                    </div>
                    
                    <LoginContainer>
                        <form action="">
                            <input name="username" type="text"/>
                            <input name="password" type="text"/>
                            <br/>
                            <button>Sign Up</button>
                            <input type="submit" value="Log In"/>
                        </form>
                    </LoginContainer>
                </SplashContainer>
            </div>
        )
    }
}
export default HomePage