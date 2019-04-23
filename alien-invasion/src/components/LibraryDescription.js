import React from 'react';

const LibraryDescription = (props) => {
    

    return (
        <div>
            <p> Location: {props.libraries.streetname}</p>
            <p> Name: {props.libraries.name}</p>
            <p> Number: {props.libraries.housenum}</p>

            <p> </p>
        </div>
    )
}




export default LibraryDescription;