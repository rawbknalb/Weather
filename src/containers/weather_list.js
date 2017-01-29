import React, { Component } from "react";
import { connect } from "react-redux";

import WeatherChart from "../components/weather_chart";

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather() {
    return this.props.weather.map(cityData => {
      const name = cityData.city.name;

      const temperature = cityData.list.reduce(
        (a, tempData) => {
          const data = {};
          data.value = tempData.main.temp;
          a.push(data);
          return a;
        },
        []
      );

      const pressure = cityData.list.reduce(
        (a, tempData) => {
          const data = {};
          data.value = tempData.main.pressure;
          a.push(data);
          return a;
        },
        []
      );

      const humidity = cityData.list.reduce(
        (a, tempData) => {
          const data = {};
          data.value = tempData.main.humidity;
          a.push(data);
          return a;
        },
        []
      );            

      return (
        <div key={cityData.city.id}>
          <div className="card-block">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div> 
          <div className="card-block">
              <WeatherChart data={temperature} type="Temperature" />
              <WeatherChart data={pressure} type="Pressure" />
              <WeatherChart data={humidity} type="Humidity" />                     
          </div>         
        </div>

      );
    });
  }

  render() {
    return (
      <div className="card text-center">
          {this.renderWeather()}
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
