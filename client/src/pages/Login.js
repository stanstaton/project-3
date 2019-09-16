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
            console.log('ERROR', err.response.data)
            this.setState({
                message: `${err.response.status}: ${err.response.data.message} `
            })
        })
    }

    render() {
        
        if(this.props.user) {
            return <Redirect to="/profile" />
        }
        
        return (
            
           
            <div className="page-header clear-filter" style={{
                backgroundImage: "url(" + require("../assets/img/seattle.jpg") + ")"
                
              }}>
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
      
                <form >
  <div class="form-group">
    <label for="exampleInputEmail1"></label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e) => this.setState({ email: e.target.value})}/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"></label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={(e) => this.setState({ password: e.target.value})}/>
  </div>

  <div class="form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"/>
      <span class="form-check-sign"></span>
      Remember Me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
            
        )
    }

}

export default Login