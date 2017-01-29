import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../store/actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", data: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // fetch weather data
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <form
        onSubmit={event => this.handleSubmit(event)}
        className="input-group"
      >
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
