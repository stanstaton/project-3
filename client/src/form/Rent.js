// import React from 'react'
import React, { useState } from 'react';
// import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import moment from "moment";
import { Button, CustomInput, Form, FormGroup, Label} from 'reactstrap';
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
            endDate: new Date("09/17/2019"),
            days: 0,  
            datesBooked: []
        }
    }
    handleChangeStart = (date) => {
        this.setState({ startDate: date }, () => this.daysLeft());
    }
    handleChangeEnd = (date) => {
        this.setState({ endDate: date }, () => this.daysLeft());
    }
    daysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        if (startDate.isAfter(endDate)) throw new Error('Start date must precede end date!')
    
        return endDate.diff(startDate, "days");
    }
    dateRange = () => {
        // let currentDate = startDate;
        let dates_unavailable = []
        let momentStartDate =  moment(this.state.startDate).format('MM/D/YYYY')
        let momentEndDate =  moment(this.state.endDate).format('MM/D/YYYY')
        console.log('start', momentStartDate)
        console.log('end', momentEndDate)
        // while(momentStartDate!== momentEndDate) {
        //     console.log(momentStartDate.toDate());
        //     dates_unavailable.push(momentStartDate.toDate());
        //     momentStartDate = momentStartDate.add(1, 'days');
        // }
        console.log('start Date', dates_unavailable)
        console.log('this is working')
    }

    handleNeighborhoodChange = (e) => {
        e.preventDefault()
        this.setState({ currentNeighborhood: e.target.value})
        console.log('submitted!', e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.dateRange()
    }

    render() {
        console.log('Rendering!')
        const { startDate, endDate } = this.state;
        const daysLeft = this.daysLeft(startDate, endDate);
    
    return (
        <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image" style={{ backgroundImage: "url(" + require("../assets/img/seattle.jpg") + ")" }}> </div>
        <div className='Rental-Form'>
        <h1>Rental Content</h1>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
            <Label className="Rental-Content" for="exampleCustomSelect">Select Neighborhood</Label> 
            <br />
            <CustomInput onChange={this.handleNeighborhoodChange} type="select" id="exampleCustomSelect" name="customSelect">
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
                    onChange={date => this.handleChangeStart(date)}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                <label>Select End Date:</label>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={date => this.handleChangeEnd(date)}
                    selectsEnd
                    endDate={this.state.endDate}
                    minDate={this.state.startDate} />
                    <h2>Looking for a {daysLeft} night stay.</h2>
                    
            </FormGroup>
            <Button type="submit">Search!</Button>
        </Form>
        <Rental current={this.state.currentNeighborhood}/>
        </div>
        </div>
      
    )}
}

export default Rent