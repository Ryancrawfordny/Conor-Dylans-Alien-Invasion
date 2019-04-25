import React, { PureComponent } from 'react';

export default class LibraryInfo extends PureComponent {

    render() {
        const { info } = this.props

        console.log(this.props.info.name)
        const libraryName = `${this.props.info.name}`
    
        return (
            <div>
                <span>Name: {libraryName}</span>
            </div>
    
        )
    }

}

