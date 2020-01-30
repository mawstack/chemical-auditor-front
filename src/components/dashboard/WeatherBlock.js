import React, { Component } from "react";

class WeatherBlock extends Component {
  state = {
    weatherData: ""
  };

  callAPI() {
    fetch("http://localhost:3001/entries/new")
      .then(res => res.text())
      .then(res =>
        this.setState({
          weatherData: res
        })
      )
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const { weatherData } = this.state;
    if (!weatherData) {
      return <div>Loading...</div>;
    } else {
      const fullParsedData = JSON.parse(weatherData);
      return (
        <div>
          <h3>Today's Weather:</h3>
          <ul>
            <li>Wind Speed: {fullParsedData.speed}km/h</li>
            <li>Wind Direction: {fullParsedData.deg}</li>
          </ul>
        </div>
      )
    }
  }
}

export default WeatherBlock;
