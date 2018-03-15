import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { SplashContainer, HomePageText, LoginContainer, LoginFormInput, Button } from './styled-components/Containers'

class HomePage extends Component {

    state = {
        username: "",
        login: false,
    }

    isLoggedIn = () => {
        if (this.state.isLoggedIn === false) {
          this.setState({isLoggedIn: true})
        }else{
          this.setState({isLoggedIn: false})
        }
      }

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

        // if (this.state.login === true) {
        //     this.props.isLoggedIn()
        //     return (<Redirect to="/categories" />)
        // }

        return (
            <div>
                <SplashContainer>
                    <div>
                    <HomePageText></HomePageText>
                    </div>
                    
                    <LoginContainer>
                        <form onSubmit={this.handleSubmit}>
                            <LoginFormInput name="username" type="text" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                            <br/>
                            <LoginFormInput name="password" type="text" placeholder="password" value="password"/>
                            <br/>
                            <div>
                            <Button type="submit" value="Log In" />
                            </div>
                            <div>
                            <Button type="submit" value="Sign Up"/>
                            </div>
                        </form>
                    </LoginContainer>
                </SplashContainer>
            </div>
        )
    }
}
export default HomePage