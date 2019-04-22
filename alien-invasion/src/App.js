import React, { Component } from 'react';
import './App.css';
import AbductionLocation from './components/AbductionLocation';
import Axios from 'axios';
import AlienMap from './components/AlienMap';

// import AbductionLocation from './components/AbductionLocation';
// import AbductionWitness from './components/AbuctionWitness';



class App extends Component {
  constructor() {
    super();
    this.state = {
      abductions: []
    };
  }


  abductionInfoFunction() {
    let url = 'https://azure-westeurope-prod.socrata.com/resource/5pzx-id7h.json'
    Axios.get(url)
      .then(response => {
        this.setState({
          abductions: response.data
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
    console.log(this.state.abductions);

    return (
      <div className="App">
        <div className="AlienMap">
          <AlienMap component={AlienMap} abductions={this.state.abductions} />
        </div>
        <div className="mapContainer">

          <h1 className="is-size-4"></h1>
        </div>

        <input type="text" onChange={this.setLocation} />
        <button onClick={this.abductionInfoFunction}>Find out where an abduction happened near you!</button>
        <h1>Was contact made?</h1>
        <AbductionLocation abductions={this.state.abductions} />




      </div>

    );
  }
}

export default App;
