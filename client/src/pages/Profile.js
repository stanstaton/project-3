import React from 'react'
import { Redirect } from 'react-router-dom'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row
} from "reactstrap";



const Profile = props => {
    //If user is not user than redirect to home page



    if(!props.user) {
        return <Redirect to="/" />
    }
    return (
        
        <div>
            <h2>{props.user.firstname}'s Profile</h2>
            <img src={props.user.profileUrl} />
            <h3>Update Profile</h3>
            <form onSubmit={props.updateProfile}>
                <Input name="firstname" value={props.user.firstname} />
                <br /><br></br>
                <Input name="lastname" value={props.user.lastname} />
                <br /><br></br>
                <Input name="email" value={props.user.email} />
                <br /><br></br>
                <Input name="profileUrl" value={props.user.profileUrl} />
                <br></br><br></br><br></br>
                <input className="btn btn-primary" type="submit" />
            </form>

            <hr />
            <h2>Bookings</h2>

            <hr />
            <h2>Owned Bookings:</h2>
            
        </div>
       
    )
}

export default Profile