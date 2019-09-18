import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '.././constants'


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        message: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit', this.state)
        axios.post(`${SERVER_URL}/auth/login`, this.state)
        .then(response => {
            //Assign token
            console.log('Success', response)
           
            //Store Token in localStorage (with an argument thats specific to your app)
            localStorage.setItem('mernToken', response.data.token)

            //Update App with user info
            this.props.updateUser()

        })
        .catch(err => {
            // console.log('ERROR', err.response.data)
            // this.setState({
                // message: `${err.response.status}: ${err.response.data.message} `
            // })
        })
    }

    render() {
        
        if(this.props.user) {
            return <Redirect to="/profile" />
        }
        
        return (
            
          <div className="container" >
            <div className="page-header clear-filter" >
                <h1 className="Rental-Form">Login Content</h1>
                <span className="red">{this.state.message}</span>
                {/* <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Your email" 
                        onChange={(e) => this.setState({ email: e.target.value})}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Your password" 
                        onChange={(e) => this.setState({ password: e.target.value})}/>
                    </div>
                        <button type="submit">Log Me In!</button>
                </form> */}

                <form onSubmit={this.handleSubmit} >

  <div className="form-group">
    <label htmlFor="exampleInputEmail1"></label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e) => this.setState({ email: e.target.value})}/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1"></label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={(e) => this.setState({ password: e.target.value})}/>
  </div>

  <div className="form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox"/>
      <span className="form-check-sign"></span>
      Remember Me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
    </form>
            </div>
            </div>
        )
    }

}

export default Login