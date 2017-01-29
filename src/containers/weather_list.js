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

      const date = cityData.list.map(weather => weather.dt_txt.slice(0, 16));
      const temperature = cityData.list.map(weather => weather.main.temp);
      const pressure = cityData.list.map(weather => weather.main.pressure);
      const humidity = cityData.list.map(weather => weather.main.humidity);

      return (
        <div key={cityData.city.id}>
          <div className="card-block">
            <h4 className="card-title">5 day / 3 hour forecast for {name}</h4>
          </div>
          <div className="card-block">
            <WeatherChart data={temperature} type="Temperature" date={date} />
            <WeatherChart data={pressure} type="Pressure" date={date} />
            <WeatherChart data={humidity} type="Humidity" date={date} />
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
