import React, { Component } from 'react';

import './App.css';
import AbductionDescription from './components/AbductionDescription';
// import AbductionDescription from './components/AbductionDescription';
// import AbductionLocation from './components/AbductionLocation';
// import AbductionWitness from './components/AbuctionWitness';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: 0,
      date: 0,
      bac: 0,
      gibberish: '',
      plausibility: 0,
    };
  }

  setZip(e) {
    this.setState({
      zip: e.target.value
    })
  }

  abductionInfoFunction() {
    url = 'https://azure-westeurope-prod.socrata.com/resource/5pzx-id7h.json'
      fetch(url)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        this.setState({
          date: data.date,
          bac: data.bac,
          gibberish: data.gibberish,
          plausibility: data.plausibility,
        })
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  componentDidMount() {
    this.abductionInfoFunction()
  }


  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.setZip} />
        <button onClick={this.abductionInfoFunction}>Find out where an abduction happened near you!</button>
        <div>Was contact made?</div>
        <AbductionDescription
          date={this.state.date}
          bac={this.state.bac}
          gibberish={this.state.gibberish}
          plausibility={this.state.plausibility}
        />




      </div>
    );
  }
}

export default App;
