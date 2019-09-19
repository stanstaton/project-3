import React from 'react'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '.././constants'
import axios from 'axios'

import { Button, Input } from "reactstrap";


class Profile extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        firstname: '',
        lastname: '',
        profileUrl: ''
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let token = localStorage.getItem('mernToken')
        console.log('user form was submitted', this.state, SERVER_URL, token)
        //send the user sig up data to the server
        axios.put(`${SERVER_URL}/auth/${this.props.user._id}`, this.state, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
            .then(response => {
                console.log('SUCCESS', response, token)

                //Store Token in localStorage (with an argument thats specific to your app)
                localStorage.setItem('mernToken', response.data.token)
              
                //Update App with user info
                this.props.updateUser()
                this.props.setState({
                    firstname: '',
                    lastname: '',
                    profileUrl: ''
                })
            })
            .catch(err => {
                // console.log('ERROR', err.response.data.message)
            })
    }
   
    render() {
         //If user is not user than redirect to home page
        if(!this.props.user) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h2>{this.props.user.firstname}'s Profile</h2>
            <img src={this.props.user.profileUrl} />
            <h3>Update Profile</h3>
            <form onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                <Input name="firstname" placeholder={this.props.user.firstname} value={this.state.firstname} onChange={this.handleChange} />
                <br />
                <label>Last Name:</label>
                <Input name="lastname" placeholder={this.props.user.lastname} value={this.state.lastname} onChange={this.handleChange} />
                <br />
                <label>Profile Url:</label>
                <Input name="profileUrl" placeholder={this.props.user.profileUrl} value={this.state.profileUrl} onChange={this.handleChange}/>
                <br />
                {/* <input className="btn btn-primary" type="submit" /> */}
                <Button type="submit">Submit</Button>
            </form>
            <hr />
            <h3>Bookings:</h3>

            <hr />
            <h3>Owned Properties:</h3>
            
            </div>
       
        )
    }
}

export default Profile