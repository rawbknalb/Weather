import React, { Component } from "react";
import "./App.css";

// components
import SearchBar from "./containers/search_bar";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: null };
  //   fetch("https://restcountries.eu/rest/v1/name/germany?fullText=true").then(
  //     res => this.setState({ data: res.json() })
  //   );
  // }

  render() {
    return (
      <div className="App">
        <h1>Search City</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
