import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", data: null };
    //this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  //   this.setState( {searchTerm: event.target.value})
  // }

  onFormSubmit(event) {
    event.preventDefault();
    // fetch weather data
    console.log(event);
    const APP_ID = "16ac2d0b507d8599b501cc694aaade68";
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.searchTerm},de&APPID=${APP_ID}`;

    fetch(openWeatherUrl)
      .then(res => res.json())
        .then(data => this.setState({data}));
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.searchTerm}
          placeholder="Get a five-day forecast in your favorite countries"
          className="form-control"
          onChange={event => this.setState({ searchTerm: event.target.value })}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
