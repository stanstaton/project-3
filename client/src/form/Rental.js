import React from 'react'

class Rental extends React.Component {
    state ={
        showForm: false
    }
    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    } 
    render() {

    return (
        <div>
        <h3>Display Search Results Below</h3>
        <h4>{this.current}</h4>
        </div>
    )
    }
}

export default Rental