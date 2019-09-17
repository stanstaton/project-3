import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '.././constants'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row
} from "reactstrap";


class Host extends React.Component {
    state = {
        address: '',
        city: '',
        State: '',
        neighborhood: '',
        photo: ''
    }

    storeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addInput = (e) => {
        var button = document.createElement('button');
        button.innerHTML = 'click me';
        button.onclick = function(){
          alert('here be dragons');return false;
        };
        // where do we want to have the button to appear?
        // you can append it to another element just by doing something like
        // document.getElementById('foobutton').appendChild(button);
        document.body.appendChild(button);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('form was submitted', this.state, SERVER_URL)
        //send the user sig up data to the server
        axios.post(`${SERVER_URL}/auth/property`, this.state)
            .then(response => {
                console.log('SUCCESS', response)

                //Store Token in localStorage (with an argument thats specific to your app)
                localStorage.setItem('mernToken', response.data.token)

                //Update App with user info
                this.props.updateUser()
            })
            .catch(err => {
                // console.log('ERROR', err.response.data.message)
            })
    }

    render() {

        //if user signs up, redirect to profile page
        // if (this.props.user) {
        //     return <Redirect to="/host" />
        // }
        return (
            <Container>
          <Row>
            <Card className="sign-up-form1" data-background-color="blue">
                <h2>Host a property </h2>
                <form className="form1" onSubmit={this.handleSubmit}>
                <CardBody>
                    <div>
                        {/* <label>First Name:</label> */}
                        <InputGroup>
                        <Input name="address" placeholder="Your address" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Last Name:</label> */}
                        <InputGroup>
                        <Input name="city" placeholder="Your city" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Email:</label> */}
                        <InputGroup>
                        <Input name="State"  placeholder="Your state" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Password:</label> */}
                        <InputGroup>
                        <Input name="neighborhood" placeholder="Your neighborhood" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Profile Image:</label> */}
                        <InputGroup>
                        <Input name="photo" placeholder="Your proptery photo" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div><button onclick="addInput()">Add More</button></div>
                    </CardBody> 
                    <CardFooter className="text-center">
                        <Button className="btn-round btn-white"
                        color="white"
                        to="/Home"
                        outline
                        size="lg" 
                        type="submit">Sign Me Up!</Button>
                   </CardFooter>

                </form>
               {/* <div> { this.SignUp }</div> */}
            </Card>
            </Row>
            </Container>
                )
            }
        }
        
export default Host