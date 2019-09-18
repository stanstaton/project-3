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
    
    constructor(props){
        super(props)
        this.state = {
            address: '',
            city: '',
            State: '',
            neighborhood: '',
            description: '',
            photo: '',
            photos: [],
            user: null,
            redirect: false
        }
    }

    componentDidMount() {
        if (this.props.user) { 
            this.setState({user: this.props.user._id})
        }
    }

    storeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addInput = (e) => {
        e.preventDefault()
        let inputsCopy = [...this.state.photos, this.state.photo]
        this.setState({ 
            photos: inputsCopy,
            photo: ''
        })
    }

    returnRedirect = () => {
        return <Redirect to="/profile" />
    }

    handleSubmit = (e) => {
        let token = localStorage.getItem('mernToken')
        e.preventDefault()
        console.log('form was submitted', this.state, SERVER_URL)
        //send the user sig up data to the server
        axios.post(`${SERVER_URL}/property/new`, this.state, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
            .then(response => {
                console.log('SUCCESS', response)
                let tempUserArr = [...this.props.user.ownedProperties]
                tempUserArr.push(response.data.newProp._id)
                let sentObj = {
                    ownedProperties: tempUserArr
                }
                axios.put(`http://localhost:3001/auth/${this.props.user._id}`, sentObj, {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                .then(response => {
                    console.log('success')
                })
                .catch(err => {
                    console.log(err)
                })

                //Store Token in localStorage (with an argument thats specific to your app)
                localStorage.setItem('mernToken', response.data.token)

                //Update App with user info
                this.props.updateUser()
                this.setState({redirect: true})
            })
            .catch(err => {
                // console.log('ERROR', err.response.data.message)
            })
    }

    render() {

        //if user signs up, redirect to profile page
        if (!this.props.user) {
            return <Redirect to="/login" />
        }

        if(this.state.redirect == true) {
            return <Redirect to="/profile" />
        }

        let inputsDisplay = this.state.photos.map((propPic, idx) => {
            return <div key={idx}> {propPic} </div>
        })  
        return (
            <Container id="hostContainer">
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
                        {/* <label>Password:</label> */}
                        <InputGroup>
                        <Input name="maxNumberOfGuests" placeholder="Maximum Number of Guests" onChange={this.storeInput}/>
                        </InputGroup>
                    </div>
                    <div>
                        {/* <label>Password:</label> */}
                        <InputGroup>
                        <Input name="description" placeholder="Description" onChange={this.storeInput}/>
                        </InputGroup>
                        <hr></hr>
                    </div>
                    <div>
                        {/* <label>Profile Image:</label> */}
                        <InputGroup>
                        <Input name="photo" typ="url" placeholder="Your proptery photo" onChange={this.storeInput} value={this.state.photo}/>
                        </InputGroup>
                    </div>
                    <br></br> 
                    <div><button id="addPhotoInput" onClick={this.addInput}>Add</button></div>
                    <br></br> <br></br>
                    Photos to Use:
                    <br/>
                    {inputsDisplay}
                </CardBody> 
                <CardFooter className="text-center">
                    <Button className="btn-round btn-white"
                    color="white"
                    to="/Home"
                    outline
                    size="lg" 
                    type="submit">Add New Property!</Button>
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