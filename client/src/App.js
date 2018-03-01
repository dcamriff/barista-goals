import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import CategoriesList from './components/CategoriesList'
import CategoryShow from'./components/CategoryShow'

class App extends Component {
  state = {
    isLoggedIn: false,
    categories: []
  }

  isLoggedIn = () => {
    if (this.state.isLoggedIn === false) {
      this.setState({isLoggedIn: true})
    }else
    {this.setState({isLoggedIn: false})
    }
  }
  componentWillMount(){
    this.fetchCategories()
    // this.fetchFieldNotes()
  }

  fetchCategories = async () => {
    try {
      const res = await axios.get('/api/categories')
        await this.setState({categories: res.data})
        return res.data
      }
      catch (err) {
        console.log(err)
        await this.setState({error: err.message})
        return err.message
      }
  }

  render() {
    const HomeComponent = () => (<HomePage />)
    const CategoryListComponent = () => (<CategoriesList categories={this.state.categories}/>)
    const CategoryShowComponent = (props) => (<CategoryShow city={this.state.category} {...props} isLoggedIn = {this.state.isLoggedIn}  />)

    return (
      <Router>
        <div className="App">
        <Navbar isLoggedIn = {this.state.isLoggedIn}/>
          <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/categories" component={CategoryListComponent} />
          <Route exact path="/categories/:id" component={CategoryShowComponent} />
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App
