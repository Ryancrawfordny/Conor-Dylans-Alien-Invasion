import React, { Component } from 'react';


class AbductionDescription extends Component {
    render() {
        return (
            <div>
                <h2>
                    Date: {this.props.date}
                </h2>
                <h2>
                    BAC: {this.props.bac}
                </h2>
                <h2>
                    Gibberish: {this.props.gibberish}
                </h2>
                <h2>
                    Plausibility:{this.props.plausibility}
                </h2>
            </div>

        );
    }
}

export default AbductionDescription;