import React from 'react';
import LibraryDescription from './LibraryDescription'




const LibraryLocation = (props) => {
    
    const sightings = (
        <div>
            
            {props.libraries.map((libraries, index) =>
                <LibraryDescription key={index} libraries={libraries} />
            )}
        </div>

    )

    return (
        <div>{sightings}</div>

    )
}


export default LibraryLocation;