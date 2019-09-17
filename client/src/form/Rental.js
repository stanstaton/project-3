import React from 'react'

class Rental extends React.Component {
    state ={
        showForm: false
    }
    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    } 
    render() {

    return (
        <div>
            
            <div className="rental-result">
           <h2>{this.props.current}</h2>
                
                
                
            </div>
        </div>
    )
    }
}

export default Rental