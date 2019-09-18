import React from 'react'


const Results = props => {
    return (
        <div>
            <h3>
                {props.result.address}
            </h3>
            <img src={props.result.photos[0]} />
            <p>{props.result.city}, {props.result.state}</p>
            <p>{props.result.maxNumberOfGuests}</p>
        </div>
    )
}

export default Results