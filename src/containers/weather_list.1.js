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
        <tr key={cityData.city.id}>
          <td>{name}</td>
          <td><WeatherChart data={temperature} type="Temperature" /></td>
          <td><WeatherChart data={pressure} type="Pressure" /></td>
          <td><WeatherChart data={humidity} type="Humidity" /></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.renderWeather()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
