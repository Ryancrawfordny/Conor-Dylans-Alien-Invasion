import React, { Component } from 'react';
// import './App.css';
import LibraryLocation from './components/LibraryLocation';
import Axios from 'axios';
import LibraryMap from './components/LibraryMap';



class App extends Component {
  constructor() {
    super();
    this.state = {
      libraries: []
    };

  }

  LibraryInfoFunction() {
    let url = 'https://data.cityofnewyork.us/resource/feuq-due4.json'
    Axios.get(url)
      .then(response => {
        this.setState({
          libraries: response.data
        })

      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  componentDidMount() {

    this.LibraryInfoFunction()
  }



  render() {
    return (
      <div className="App">
        <div className="LibraryMap">
          <LibraryMap component={LibraryMap} libraries={this.state.libraries} />
        </div>
        <div className="mapContainer">
          <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

            </div>
          </nav>


        </div>

        <input type="text" onChange={this.setLocation} />
        <button onClick={this.LibraryInfoFunction}>Find Your Library</button>
        <h1>Library List</h1>
        {this.state.libraries.length ?
          <LibraryLocation libraries={this.state.libraries} /> : null}




      </div>

    );
  }
}

export default App;
