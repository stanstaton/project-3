import React from 'react'
import { Route} from 'react-router-dom'

// Importing routes 
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Rent from '../form/Rent'

import Host from '../pages/Host'
import Search from '../pages/Search'


const Content = props => {
    return (
        <div className="container">
            <Route exact path="/" component={Home} />

            <Route exact path="/rent" component={Rent} />
            <Route exact path="/host" render={
               () => <Host user={props.user} /> 
            } />
            <Route exact path="/rent" component={Search} />
            <Route exact path="/profile" render={
               () => <Profile updateProfile={props.updateProfile} user={props.user} /> 
            } />
            <Route exact path="/login" render={
             () => <Login user={props.user} updateUser={props.updateUser} />
             } />
            <Route exact path="/signup" render={
             () => <Signup user={props.user} updateUser={props.updateUser} />
             } />
        </div>
    )
}

export default Content