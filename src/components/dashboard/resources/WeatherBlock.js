import React, { Component } from "react";

class WeatherBlock extends Component {
  state = {
    weatherData: "null",
    speed: null,
    deg: null,
    dir: "",
    errorMessage: ""
  };

  async callAPI() {
    await fetch(`${process.env.REACT_APP_API_URL}/entries/new`
      // headers: {
      //   Authorization: `Bearer ${this.props.jwtToken}`
      // }
    )
      .then(res => res.text())
      .then(res =>
        this.setState({
          weatherData: res
        })
      )
      .catch(err =>
        this.setState({
          errorMessage: `${err} -- Weather service unreachable`
        })
      );

    const { weatherData } = this.state;

    if (weatherData[0] === "<") {
      this.setState({
        errorMessage:
          "Unable to process request, please try again later -- JWT Token Invalid"
      });
      return null;
    }

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
    const degToCompass = () => {
      const num = this.state.deg;
      const val = Math.floor(num / 22.5 + 0.5);
      const arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
      ];
      const dir = arr[val % 16];
      this.setState({
        dir: dir
      });
    };
    realSpeed();

    degToCompass();
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { speed, deg, dir, errorMessage } = this.state;

    if (speed) {
      return (
        <div>
          <ul>
            <li>Wind Speed: {speed}km/h</li>
            <li>Wind Direction: {dir}</li>
            <li>Wind Degrees: {deg}</li>
          </ul>
        </div>
      );
    } else if (Object.prototype.toString.call(speed) === "[object String]") {
      return (
        <div>
          <h3>{speed}</h3>
        </div>
      );
    } else if (errorMessage) {
      return (
        <div>
          <h3>{errorMessage}</h3>
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
