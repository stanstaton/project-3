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
        </div>
    )
}

export default Profile