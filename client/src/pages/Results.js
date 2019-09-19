import React from 'react'
import Axios from 'axios'
import SimpleImageSlider from "react-simple-image-slider";
import { Button, CustomInput, Form, FormGroup, Label, Input, Card} from 'reactstrap';



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

        let photosArr = props.result.photos.map((photoUrl, index) => {
            return {url: photoUrl}
        })

        if (photosArr.length == 0) {
            photosArr = [{url: "https://cdn.pixabay.com/photo/2019/03/13/14/21/home-4052993_960_720.png"}]
        }
    
//     render (){
    return (
        <Card   className="rentResults" >
            <h3>
                {props.result.address}
            </h3>
            <div className="minHeight">
            <SimpleImageSlider className="slider"
                    width={500}
                    height={400}
                    images= {photosArr}
            // {props.result.photos.map((photoUrl, index) => {
            //     return {url: photoUrl}
            //                })}
            />
            </div>
            {/* <img src={props.result.photos[0]} /> */}
            <p>{props.result.city}, {props.result.state}</p>
            <p>{props.result.maxNumberOfGuests}</p>
            {/* <button onClick={handleSubmit}>Book it!</button> */}
        </Card>
    )
    //}
}

export default Results