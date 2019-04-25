import React, { PureComponent } from 'react';

export default class LibraryInfo extends PureComponent {

    render() {
        const { info } = this.props

        console.log(this.props.info.name)
        const libraryName = `${this.props.info.name}`
        const libraryCity = `${this.props.info.city}`
        const libraryNum = `${this.props.info.housenum}`
        return (
            <ul>
            <div>
               <li> <span>Name: {libraryName}</span> </li>
                
               <li> <span>City: {libraryCity}</span> </li>

                <li><span>Street Number: {libraryNum}</span> </li>
            </div>
            </ul>
    
        )
    }

}

