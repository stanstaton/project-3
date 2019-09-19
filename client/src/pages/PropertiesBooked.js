import React, {Component} from 'react'
import axios from 'axios'
import SERVER_URL from '../constants'

class PropertiesBooked extends Component {
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
            <div>
                <h5>{this.state.property.address}</h5>
            </div>
        )
    }
}


export default PropertiesBooked