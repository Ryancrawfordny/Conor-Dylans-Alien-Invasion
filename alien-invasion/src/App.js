import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AbductionDescription from './components/AbductionDescription';
import AbductionLocation from './components/AbductionLocation';
import AbductionWitness from './components/AbuctionWitness';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: 0,
      url: 'https://azure-westeurope-prod.socrata.com/resource/5pzx-id7h.json',
      date: 0,
      bac: 0,
      gibberish: '',
      plausibility: 0,
    };
  }

  setZip (e) {
    this.setState({
      zip: e.target.value
    })
  }
  
  
  render() {
    return (
      <div>
        <li><Link to="/">Home</Link></li>


      </div>
    );
  }
}

export default App;
