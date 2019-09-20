import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { Button, CustomInput, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import axios from 'axios';




// const Results = props => {
class Results extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: this.props.result.photos,
            maxNumberOfGuests: this.props.result.maxNumberOfGuests,
            address: this.props.result.address,
            _id: this.props.result._id,
            city: this.props.result.city,
            state: this.props.result.state,
            dates_unavailable: this.props.dates_unavailable[0],
            user: null,
            newItem: null,
            array: []
        }
    }

    // componentDidMount = () => {
    //     if(this.props.user) {
    //         this.setState({user: this.props.user._id})
    //     }
    //     let tempArr = []
    //     console.log('this is the state dates unavailable array', this.state.array)
    //     console.log('This is the dates unavailable array', this.props.dates_unavailable[0])
    //     this.props.dates_unavailable.forEach(d => {
    //         tempArr.push(d[0])
    //         console.log('I am making an array', tempArr, 'this is what was added', d[0])
    //     })

    //     console.log('The Array build finished',tempArr, this.state.dates_unavailable)
    //     this.setState({dates_unavailable: tempArr})
    //     console.log('this is the state',this.state.dates_unavailable)
    //     this.setState({dates_unavailable: this.state.dates_unavailable[0]})
    //     console.log('this is the state',this.state.dates_unavailable)
    // }
    
    handleSubmit = e => {
        e.preventDefault()
        let token = localStorage.getItem('mernToken')

        let tempUserArr = [...this.props.user.bookedProperties]
        tempUserArr.push(this.props.result._id)
        let sentObj = {
            bookedProperties: tempUserArr
        }
        console.log('Look its the state', this.state)
        axios.put(`http://localhost:3001/property/${this.props.result._id}`, this.state)
        .then((response) => {
            console.log('Form was submitted')
            axios.put(`http://localhost:3001/auth/${this.props.user._id}`, sentObj, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => {
                console.log('success', response)
                localStorage.setItem('mernToken', response.data.token)
                this.props.updateUser()
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

//     handleSubmit = e => {
//         e.preventDefault()
//         Axios.put(`http://localhost:3001/property/${props.result._id}`, this.state,)
//     }

       
    
render () {
    let photosArr = this.props.result.photos.map((photoUrl, index) => {
        return {url: photoUrl}
    })

    if (photosArr.length == 0) {
        photosArr = [{url: "https://cdn.pixabay.com/photo/2019/03/13/14/21/home-4052993_960_720.png"}]
    }
    return (
        <Card   className="rentResults" >
            <h3>
                {this.props.result.address}
            </h3>
            <div className="minHeight">
            <SimpleImageSlider className="slider"
                    width={500}
                    height={400}
                    images= {photosArr}
            // {this.props.result.photos.map((photoUrl, index) => {
            //     return {url: photoUrl}
            //                })}
            />
            </div>
            {/* <img src={this.props.result.photos[0]} /> */}
            <p>{this.props.result.city}, {this.props.result.state}</p>
            <p>{this.props.result.maxNumberOfGuests}</p>
                            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Book it!" />
                </form>
            {/* <button onClick={handleSubmit}>Book it!</button> */}
        </Card>
    )
    }

}

export default Results