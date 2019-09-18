import React from 'react'
import axios from 'axios'
import SERVER_URL from '../constants'
import Results from './Results'


class Search extends React.Component {

    state = {
        maxNumberOfGuests: 0,
        neighborhood: 'Ballard',
        resultsObj: []
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.neighborhood.value)
        // this.setState({neighborhood: e.target.neighborhood.value})
        console.log('Submitted', this.state)
        
        let passedData = JSON.stringify(this.state)

        console.log(SERVER_URL)

        axios.get(`http://localhost:3001/property`, {
            params: {
                maxNumberOfGuests: this.state.maxNumberOfGuests,
                neighborhood: this.state.neighborhood
            }
        })
        .then(response => {
            console.log(response)
            this.setState({resultsObj: response.data.properties})
        })

        // axios.get(`http://localhost:3001/property?neighborhood=${this.state.neighborhood}&maxNumberOfGuests__gte=${this.state.maxNumberOfGuests}}`)
        // .then(response => {
        //     console.log(response)
        //     this.setState({resultsObj: response.data.properties})
        // })
    }

    handleChange = e => {
        this.setState({maxNumberOfGuests: e.target.value})
        console.log(this.state.maxNumberOfGuests)
    }

    handleSelect = e => {
        console.log(e.target.value)
        this.setState({neighborhood: e.target.value})
    }

    render() {
        let results = this.state.resultsObj.map((r,i) => {
            return <Results 
            key={i}
            result={r}
            />
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input hidden name="city" placeholder="City" />
                    <input hidden name="state" placeholder="State" />
                    <input onChange={this.handleChange} name="maxNumberOfGuests" placeholder="Number of guests?" />
                    <label>Neighborhood:</label>
                    <select name="neighborhood" onChange={this.handleSelect}>
                        <option value="Ballard">Ballard</option>
                        <option value="University">University</option>
                        <option value="Capitol Hill">Capitol Hill</option>
                        <option value="SODO">SODO</option>
                    </select>
                    <input type="submit" />
                </form>

               {results}
            </div>

        )
    }
}

export default Search