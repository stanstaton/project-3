import React from 'react';
import moment from "moment";
import { Row, Button, CustomInput, Form, FormGroup, Label, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Rental from './Rental';
import DatePicker from "react-datepicker";
import axios from 'axios'
import SERVER_URL from '../constants'
import "react-datepicker/dist/react-datepicker.css";
import Results from '../pages/Results';
// import {Redirect} from 'react-router-dom'


class Rent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            neighborhood: '',
            propertiesName: '',
            image: '',
            unAvailable: false,
            startDate: new Date("09/19/2019"),
            endDate: new Date("09/19/2019"),
            days: 0,  
            dates_unavailable: [],
            maxNumberOfGuests: 0,
            // neighborhood: 'Ballard',
            resultsObj: []
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
        if (startDate.isAfter(endDate)) {
            console.log('Start date must precede end date!')}
    
        return endDate.diff(startDate, "days");
    }
    dateRange = () => {
        let dates_unavailable = []
        let startDate =  new Date(this.state.startDate)
        // let copiedDate = new Date(startDate);
        let endDate =  this.state.endDate
        console.log('start', startDate)
        console.log('end', endDate)
        while (startDate <= endDate) {
            dates_unavailable.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 1);
            console.log('Line 51-start', startDate)
            console.log('Line 52-end', endDate)
        }
        console.log(dates_unavailable)
        this.setState({dates_unavailable: dates_unavailable})
        return dates_unavailable;
    }
    showState = () => {
        console.log(this.state)
    }
    handleNeighborhoodChange = (e) => {
        e.preventDefault()
        this.setState({ neighborhood: e.target.value})
        console.log('submitted!', e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.dateRange()
        this.showState()
        console.log(SERVER_URL)
        console.log(this.state)
        axios.get(`http://localhost:3001/property/?neighborhood=${this.state.neighborhood}&maxNumberOfGuests={"gte":${this.state.maxNumberOfGuests}}`)
        .then(response => {
            console.log(response)
            this.setState({resultsObj: response.data.properties})
        })
    }
    handleChange = e => {
      this.setState({maxNumberOfGuests: e.target.value})
      console.log(this.state.maxNumberOfGuests)
    }
    handleChange = e => {
        this.setState({maxNumberOfGuests: e.target.value})
        console.log(this.state.maxNumberOfGuests)
    }

    render() {
        const { startDate, endDate } = this.state;
        const daysLeft = this.daysLeft(startDate, endDate);
        let results = this.state.resultsObj.map((r,i) => {
            return <Rental
            key={i}
            result={r}
            />
        })
        const today = new Date();
        today.setDate(today.getDate() + 1);
        

        return (
        <div className="page-header clear-filter" filter-color="blue">
        <div className="page-header-image" style={{ backgroundImage: "url(" + require("../assets/img/seattle.jpg") + ")" }}> </div>
        <div className='Rental-Form'>
        <h1>Rental Content</h1>
        
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
            <Label className="Rental-Content" for="exampleCustomSelect">Select Neighborhood</Label> 
            <br />
            <CustomInput onChange={this.handleNeighborhoodChange} type="select" id="exampleCustomSelect" name="nighborhood">
                <option value="Seattle">Seattle</option>
                <option value="Ballard">Ballard</option>
                <option value="Beacon Hill">Beacon Hill</option>
                <option value="Capitol Hill">Capitol Hill</option>
                <option value="Queen Anne">Queen Anne</option>
                <option value="Rainier Valley">Rainier Valley</option>
                <option value="University District">University District</option>
            </CustomInput>
            </FormGroup>
            <FormGroup>
              <label>Number of Guests</label>
              <input name="maxNumberOfGuests" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <label>Select Start Date: </label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={date => this.handleChangeStart(date)}
                    selectsStart
                    placeholder = {today}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
            </FormGroup>
            <FormGroup>
                <label>End Date:</label>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={date => this.handleChangeEnd(date)}
                    selectsEnd
                    endDate={this.state.endDate}
                    minDate={this.state.startDate} 
                    />
                    <h2>Looking for a {daysLeft} night stay.</h2>
                    
            </FormGroup>
            <Button type="submit">Search!</Button>
        </Form>
        {/* ---------- */}
        <div>
            <Row>
                <Col xs="3"></Col>
                
        <Col xs="auto">
            <Card className="bob" >
                <CardImg top width="10%" src="https://placekitten.com/g/200/300" alt="Card image cap" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
         </Col>
         <Col xs="3"></Col>
         </Row>
         </div>
            {/* <Rental current={this.state.currentNeighborhood}/> */}
        {results}
        </div>
        </div>
      
    )}
}
export default Rent