// import React from 'react'
import React, { useState } from 'react';
// import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import { CustomInput, Form, FormGroup, Label} from 'reactstrap';
import Rental from './Rental';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Rent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNeighborhood: '',
            propertiesName: 'Property Name',
            image: 'https://placebear.com/200/300',
            unAvailable: false,
            startDate: new Date("09/17/2019"),
            endDate: new Date("09/17/2019")
        }
    }
     
     handleDates = () => {
         console.log('date has been choosen')

      };
      setStartDate = (date) => {
          this.setState({startDate: date})
      }
      setEndDate = (date) => {
        this.setState({endDate: date})
    }
     // =============== 

    handleRentalSubmit = (e) => {
        e.preventDefault()
        this.setState({ currentNeighborhood: e.target.value})
        console.log('submitted!', e.target.value)
        // axios.get()
        // .then()
        // .catch()
    }
    handleSelector = (e) => {
        e.preventDefault()
        console.log('this', e.target.value)
        this.setState({ currentNeighborhood: e.target.value})
        console.log(e.target.value)
    }
    render() {

    return (
        <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image" style={{ backgroundImage: "url(" + require("../assets/img/seattle.jpg") + ")" }}> </div>
        <div className='Rental-Form'>
        <h1>Rental Content</h1>
        <Form onChange={this.handleRentalSubmit}>
            <FormGroup>
            <Label className="Rental-Content" for="exampleCustomSelect">Select Neighborhood</Label> 
            <br />
            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                <option value="">Seattle</option>
                <option value="Ballard">Ballard</option>
                <option value="Beacon Hill">Beacon Hill</option>
                <option value="Capitol Hill">Capitol Hill</option>
                <option value="Queen Anne">Queen Anne</option>
                <option value="Rainier Valley">Rainier Valley</option>
                <option value="University District">University District</option>
            </CustomInput>
            </FormGroup>
            <FormGroup>
                <label>Select Start Date: </label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={date => this.setStartDate(date)}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                <label>Select End Date:</label>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={date => this.setEndDate(date)}
                    selectsEnd
                    endDate={this.state.endDate}
                    minDate={this.state.startDate} />
            </FormGroup>
            {/* <Button type="submit">Search Rental Properties!</Button> */}
        </Form>
        <Rental current={this.state.currentNeighborhood}/>
            <h2>{this.state.currentNeighborhood}</h2>
            {/* <p>{this.state.startDate} thru {this.state.endDate}</p> */}
        </div>
        </div>
      
    )
    }
}

export default Rent