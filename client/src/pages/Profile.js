import React from 'react'
import { Redirect } from 'react-router-dom'


// class Profile extends React.Component {

//     componentDidMount() {
//         fetch('http://localhost:3001/property/')
//         .then(r => r.json())
//         .then(function(e){
//             console.log('eeeeeeeeeeeeeeeeeeeeeeeee', e)
//         })
//     }
//     render() {

//         return(

//             <div></div>

//         )
//     }

// }
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
                <input name="firstname" value={props.user.firstname} />
                <br />
                <input name="lastname" value={props.user.lastname} />
                <br />
                <input name="email" value={props.user.email} />
                <br />
                <input name="profileUrl" value={props.user.profileUrl} />
                <input type="submit" />
            </form>

            <hr />
            <h2>Upcoming Bookings</h2>
            <hr />
            <h2>Past Bookings:</h2>
        </div>
    )
}

export default Profile