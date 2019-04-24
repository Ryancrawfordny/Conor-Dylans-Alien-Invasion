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

  LibraryInfoFunction=(e)=>{
    let zip
    let url
    if(e){
      e.preventDefault()
      console.log('got event')

      zip = e.target.userInput.value
      url = `https://data.cityofnewyork.us/resource/feuq-due4.json?zip=${zip}`
    }else{
      
      url = `https://data.cityofnewyork.us/resource/feuq-due4.json`
      console.log('compdidmout')
    }
    // e.preventDefault()
    
    // console.log(e.target.userInput.value);
    
    
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
        <form onSubmit={this.LibraryInfoFunction}>
          <input type="text" name="userInput"/>
          <button type="submit">Find Your Library</button>
        </form>
        
        <h1>Library List</h1>
        {this.state.libraries.length ?
          <LibraryLocation libraries={this.state.libraries} /> : null}




      </div>

    );
  }
}

export default App;
