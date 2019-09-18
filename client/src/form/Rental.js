import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


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
                <h1>DUUUUUDDDDEEEEE</h1>
                
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
    }
}

export default Rental