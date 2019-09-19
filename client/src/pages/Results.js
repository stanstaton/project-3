import React from 'react'
import axios from 'axios'



// const Results = props => {
class Results extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: this.props.result.photos,
            maxNumberOfGuests: this.props.result.maxNumberOfGuests,
            address: this.props.result.address,
            _id: this.props.result._id,
            city: this.props.result.city,
            state: this.props.result.state,
            dates_unavailable: this.props.dates_unavailable,
            user: null,
            newItem: null
        }
    }

    componentDidMount = () => {
        if(this.props.user) {
            this.setState({user: this.props.user._id})
        }
        let tempArr = [...this.props.result.dates_unavailable]
        console.log(tempArr, this.state.dates_unavailable)
        tempArr.push(this.state.dates_unavailable)
        this.setState({dates_unavailable: tempArr})
        console.log(this.state.dates_unavailable)
    }
    
    handleSubmit = e => {
        e.preventDefault()
        let token = localStorage.getItem('mernToken')

        let tempUserArr = [...this.props.user.bookedProperties]
        tempUserArr.push(this.props.result._id)
        let sentObj = {
            bookedProperties: tempUserArr
        }
        
        axios.put(`http://localhost:3001/property/${this.props.result._id}`, this.state)
        .then((response) => {
            console.log('Form was submitted')
            axios.put(`http://localhost:3001/auth/${this.props.user._id}`, sentObj, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => {
                console.log('success', response)
                localStorage.setItem('mernToken', response.data.token)
                this.props.updateUser()
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render (){
        return (
            <div>
                <h3>
                    {this.props.result.address}
                </h3>
                <img src={this.props.result.photos[0]} />
                <p>{this.props.result.city}, {this.props.result.state}</p>
                <p>{this.props.result.maxNumberOfGuests}</p>
                <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Book it!" />
                </form>
            </div>
        )
    }
}

export default Results