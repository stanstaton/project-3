import React from 'react'
import { Redirect } from 'react-router-dom'



const Profile = props => {
    //If user is not user than redirect to home page
    if(!props.user) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <h2>{props.user.firstname}'s Profile</h2>
        </div>
    )
}

export default Profile