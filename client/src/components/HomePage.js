import React, { Component } from 'react'
import axios from 'axios'
import { SplashContainer, HomePageText, LoginContainer } from './styled-components/Containers'

class HomePage extends Component {

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        event.preventDefault()
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        axios.get(`/api/users/retrieve/${this.state.username}`)
          .then((res) => {
            if(res.data) {
              console.log(res.data[0].id)
              localStorage.setItem("userId", res.data[0].id)
              this.setState({login: true})
            }
            
          
          })
          .catch((error) => {console.log(error)})  
      }

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