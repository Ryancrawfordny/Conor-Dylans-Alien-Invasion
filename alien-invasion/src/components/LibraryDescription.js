import React from 'react';

const LibraryDescription = (props) => {
    // console.log(props.library)

    return (
        <div>
            <p> Library List: {props.library.name}</p>
            <p> City : {props.library.city}</p>
        </div>
    )
}




export default LibraryDescription;