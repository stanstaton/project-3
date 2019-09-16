import React from 'react'
// import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
// import { Col, Row, CustomInput, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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