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
            <div>
                <h1>Login Content</h1>
                <span className="red">{this.state.message}</span>
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>
            
        )
    }

}

export default Login