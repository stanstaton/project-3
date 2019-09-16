import React from 'react'
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
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
        <h3>Display Rental Properties Below</h3>
            <CardGroup>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
            </CardBody>
            </Card>
            </CardGroup>
        </div>
    )
    }
}

export default Rental