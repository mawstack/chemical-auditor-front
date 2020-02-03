import React, { Component } from "react";

class WeatherBlock extends Component {
  state = {
    weatherData: "null",
    speed: null,
    deg: null
  };

  async callAPI() {
    await fetch(`${process.env.REACT_APP_API_DOMAIN}/entries/new`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWUyYTc2NDk5NTNhZTcxZDVhZmU5ZDdhIiwiaWF0IjoxNTgwNjk0NjI1LCJleHAiOjE1ODA3ODEwMjV9.oL9y2KMkWr_sXN06cAz9-UPc7JMyn3SBqB-fWQIAlA4"
      }
    })
      .then(res => res.text())
      .then(res =>
        this.setState({
          weatherData: res
        })
      )
      .catch(err => console.log(err));

    const { weatherData } = this.state;
    const fullParsedData = JSON.parse(weatherData);

    const realSpeed = () => {
      if (
        Object.prototype.toString.call(fullParsedData.speed) ===
        "[object String]"
      ) {
        this.setState({
          speed: fullParsedData.speed,
          deg: null
        });
      } else {
        const realSpeed = Math.round(fullParsedData.speed * 3.6 * 10) / 10;

        this.setState({
          speed: realSpeed,
          deg: fullParsedData.deg
        });
      }
    };
    realSpeed();
    console.log(this.state);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { speed, deg } = this.state;

    if (speed) {
      return (
        <div>
          <ul>
            <li>Wind Speed: {speed * 3.6}km/h</li>
            <li>Wind Direction: {deg} degrees</li>
          </ul>
        </div>
      );
    } else if (
      Object.prototype.toString.call(this.state.speed) === "[object String]"
    ) {
      return (
        <div>
          <h3>{this.state.speed}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
  }
}

export default WeatherBlock;
