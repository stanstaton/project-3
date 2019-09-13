import React from 'react'
// import { Col, Row, CustomInput, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Rental extends React.Component {
    state ={
        showForm: false
    }
    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    } 
    render() {
        let message = <h3>Message here!</h3>
        let form = ''
        if (this.state.showForm) {
            form = <Rent result={this.state.propertiesName} />
        }

        if(this.props.propertiesName) {
            display = (
            <div className='property-result'>
            
            <h3>Search results below</h3>
            <h2>{this.props.propertiesName}</h2>
            <button onClick={this.toggleForm}>{this.state.showForm ? 'Cancel' : 'Edit'}</button>
            {form}
         </div>
            )
        }

    return (
        <div className=''>
        <h1>Display Rental Properties Below</h1>
        <h3>{this.state.propertiesName}</h3>
        </div>
    )
    }
}

export default Rental