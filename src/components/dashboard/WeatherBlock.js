import React, { Component } from "react";
import Axios from "axios";

class WeatherBlock extends Component {
  state = {
    weatherData: null,
    errorMessage: ""
  };

  // callApi = async () => {
  //   const weatherURL = `${process.env.REACT_APP_API_URL}/entries/new`
  //   await Axios.get(weatherURL)
  //     .then(res => res.text())
  //     .then(res =>
  //       this.setState({
  //         weatherData: res
  //       })
  //     )
  //     .catch(err =>
  //       this.setState({
  //         errorMessage: err
  //       })
  //     )
  // }
  // callAPI() {
  //   fetch("http://localhost:3001/entries/new")
  //     .then(res => res.text())
  //     .then(res =>
  //       this.setState({
  //         weatherData: res
  //       })
  //     )
  //     .catch(err => console.log(err));
  // }

  // BELOW IS THE FUNC WE WILL USE
  // async componentWillMount() {
  //   const weatherURL = `${process.env.REACT_APP_API_URL}/entries/new`
  //   await Axios.get(weatherURL)
  //     .then(res => res.text())
  //     .then(res =>
  //       this.setState({
  //         weatherData: res
  //       })
  //     )
  //     .catch(err =>
  //       this.setState({
  //         errorMessage: err
  //       })
  //     )
  // }

  render() {
    const { weatherData } = this.state;
    if (!weatherData) {
      return <div>Loading...</div>;
    } else {
      const fullParsedData = JSON.parse(weatherData);
      return (
        <div>
          <h1>Current Weather:</h1>
          <ul>
            <li>Wind Speed: {fullParsedData.speed * 3.6}km/h</li>
            <li>Wind Direction: {fullParsedData.deg} degrees</li>
          </ul>
        </div>
      )
    }
  }
}

export default WeatherBlock;
