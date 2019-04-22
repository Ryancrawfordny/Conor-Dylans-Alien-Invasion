import React from 'react';

const AbductionDescription = (props) => {
    console.log(props.sighting)

    return (
        <div>
            <p> Location: {props.sighting.incident_location}</p>

            <p> BAC: {props.sighting.blood_alcohol_level}</p>
            <p> Plausibility: {props.sighting.plausibility}</p>

            <p> </p>
        </div>
    )
}




export default AbductionDescription;