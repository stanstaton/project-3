import axios from 'axios'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './assets/css/now-ui-kit.css';
import './App.css';
import Content from './content/Content'
import Nav from './nav/Nav';
import Footer from './footer/DarkFooter'

import SERVER_URL from './constants'


class App extends React.Component {
  state = {
    user: null,
    value: ''
  }
  componentDidMount() {
    //Go look for a token
    this.getUser()
  }

  updateProfile = (e) => {
    e.preventDefault()
    localStorage.setItem('mernToken', response.data.token)
    this.getUser()
    console.log('Submitted')

  }


  getUser = () => {
    console.log('in getUSER')
    //See if there is a token
    let token = localStorage.getItem('mernToken')

    //If there's a token, try to use it to get the user info
    if(token) {
      console.log('token was', token)
      axios.get(`${SERVER_URL}/auth/current/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        console.log('SUCCESS', response)
        this.setState({ user: response.data.user})
      })
      .catch(err => {
        console.log('ERROR', err)
      })
    }
    else{
      this.setState({ user: null})
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
         <div className="page-header clear-filter" filter-color="blue">
           
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("./assets/img/seattle.jpg") + ")"
          }}
          // ref={pageHeader}
        ></div> 
          <Nav updateUser={this.getUser} user={this.state.user}/>
          
          <Footer/>
          <Content updateProfile={this.updateProfile} updateUser={this.getUser} user={this.state.user}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
