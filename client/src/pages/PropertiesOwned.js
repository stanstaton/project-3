import React, {Component} from 'react'
import axios from 'axios'
import SERVER_URL from '../constants'

class PropertiesOwned extends Component {
    constructor(props) {
        super(props)
        this.state = {
            property: {}
        }
    }


    componentDidMount() {
        console.log(this.props.results)
        axios.get(`${SERVER_URL}/property/${this.props.results}`)
        .then(response => {
            console.log(response.data)
            this.setState({property: response.data.property})
        })
    }

    render() {
        return (
            <div className="properties-owned" > 
                <h5>Address: {this.state.property.address}</h5>
                <h5>Neighborhood: {this.state.property.neighborhood}</h5>
                <h5>Description: {this.state.property.description}</h5>
                <h5>Maximum Guests: {this.state.property.maxNumberOfGuests}</h5>
                
            </div>
        )
    }
}


export default PropertiesOwned