import React, { Component } from 'react'

class LibraryFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ZipFilter: "zip"
    }
  }
  
  handleChange = (e) => {
    this.setState({
      ZipFilter: e.target.zip
    })
    this.props.onChange(event.target.zip)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Zip Code: </label>
        <input type="text" id="filter" 
          value={this.state.ZipFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default LibraryFilter