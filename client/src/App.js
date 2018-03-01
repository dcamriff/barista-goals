import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import HomePage from './components/HomePage'

class App extends Component {
  state = {
    isLoggedIn: false
  }

  isLoggedIn = () => {
    if (this.state.isLoggedIn === false) {
      this.setState({isLoggedIn: true})
    }else
    {this.setState({isLoggedIn: false})
    }
  }

  render() {
    const HomeComponent = () => (<HomePage />)

    return (
      <Router>
        <div className="App">
        <div></div>
          <Switch>
          <Route exact path="/" component={HomeComponent} />
          {/* <Route exact path="/products" component={CategoryListComponent} /> */}
          {/* <Route exact path="/order/:id" component={FieldNotesListComponent} /> */}
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App
