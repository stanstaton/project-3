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


class Signup extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        profileUrl: ''
    }

    storeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('form was submitted', this.state, SERVER_URL)
        //send the user sig up data to the server
        axios.post(`${SERVER_URL}/auth/signup`, this.state)
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
        if (this.props.user) {
            return <Redirect to="/profile" />
        }
        return (
            <Container>
          <Row>
            <Card className="sign-up-form1" data-background-color="blue">
                <h2>Signup </h2>
                <form className="form1" onSubmit={this.handleSubmit}>
                <CardBody>
                    <div>
                        {/* <label>First Name:</label> */}
                        <InputGroup>
                        <Input name="firstname" placeholder="Your first name" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Last Name:</label> */}
                        <InputGroup>
                        <Input name="lastname" placeholder="Your last name" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Email:</label> */}
                        <InputGroup>
                        <Input type="email" name="email" placeholder="Your email" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Password:</label> */}
                        <InputGroup>
                        <Input type="password" name="password" placeholder="Your password" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Profile Image:</label> */}
                        <InputGroup>
                        <Input name="profileUrl" placeholder="Your profile image" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
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
        
export default Signup