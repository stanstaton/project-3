import React from 'react'
import Axios from 'axios'



const Results = props => {
// class Results extends React.Component {

//     constructor(props) {
//         super(props)
//         state = {
//             photos: props.result.photos,
//             maxNumberOfGuests: props.result.maxNumberOfGuests,
//             address: props.result.address,
//             _id: props.result._id,
//             city: props.result.city,
//             state: props.result.state,
//             dates_unavailable: props.dates_unavailable
//         }
//     }
    
//     handleSubmit = e => {
//         e.preventDefault()
//         Axios.put(`http://localhost:3001/property/${props.result._id}`, this.state,)
//     }
    
//     render (){
    return (
        <div>
            <h3>
                {props.result.address}
            </h3>
            <img src={props.result.photos[0]} />
            <p>{props.result.city}, {props.result.state}</p>
            <p>{props.result.maxNumberOfGuests}</p>
            {/* <button onClick={handleSubmit}>Book it!</button> */}
        </div>
    )
    //}
}

export default Results