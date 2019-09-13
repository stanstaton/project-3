import React from 'react'
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import { Col, Row, CustomInput, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Rent extends React.Component {

    handleRentalSubmit = (e) => {
        e.preventDefault()
        console.log('submitted!')
        //send selected neighborhood data
        axios.get()
        .then(response => {
            console.log('SUCCESS', response)

            //Store Token in localStorage (with an argument thats specific to your app)
            
            //
           
        })
        .catch(err => {
            console.log('ERROR', err)
        })
    }

    render() {
    return (
        <div className='Rental Form'>
        <h1>Rental Content</h1>
        <Form onSubmit={this.handleRentalSubmit}>
        <FormGroup>
          <Label for="exampleCustomSelect">Select Neighborhood</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
            <option>Seattle</option>
            <option name="ballard">Ballard</option>
            <option name="beaconHill">Beacon Hill</option>
            <option name="captialHill">Capitol Hil</option>
            <option name="queenAnne">Queen Anne</option>
            <option name="rainerValley">Rainier Valley</option>
            <option name="universityDistrict">University District</option>
          </CustomInput>
        </FormGroup>
        <Button type="submit">Search Rental Properties!</Button>
      </Form>
        </div>
    )
    }
}

export default Rent