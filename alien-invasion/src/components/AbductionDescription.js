import React, { Component } from 'react';


class AbductionDescription extends Component {
    render() {
        return (
            <div>
                <h2>
                    date: {this.props.date}
                </h2>
                bac: {this.props.bac}
                <h2>
                    gibberish: {this.props.gibberish}
                </h2>
                <h2>
                    plausibility:{this.props.plausibility}
                </h2>
            </div>

        );
    }
}

export default AbductionDescription;