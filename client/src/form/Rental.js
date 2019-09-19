import React from 'react'
import { Input, Row, Button, CustomInput, Form, FormGroup, Label, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';


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
            <div className="rental-result">
            <h2>{this.props.current}</h2>
            </div>

            <div className="search-results">
            <div>
            <Row>
                <Col xs="3"></Col>
                
        <Col xs="auto">
            <Card className="bob" >
            </Card>
         </Col>
         <Col xs="3"></Col>
         </Row>
         </div>

            </div>
        </div>
    )
    }
}

export default Rental