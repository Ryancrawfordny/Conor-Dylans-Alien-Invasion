import React from 'react';
import AbductionDescription from './AbductionDescription'




const AbductionLocation = (props) => {
    console.log(props.abductions);
    const sightings = (
        <div>
            {props.abductions.map((sighting, index) =>
                <AbductionDescription key={index} sighting={sighting} />
            )}
        </div>

    )

    return (
        <div>{sightings}</div>

    )
}


export default AbductionLocation;