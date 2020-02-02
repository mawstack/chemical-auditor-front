import React, { Component } from "react";
import FormEntryDetails from "./FormEntryDetails";
import FormAdditionalDetails from "./FormAdditionalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export class EntryForm extends Component {
  state = {
    // step == current step we are on
    step: 1,
    date: null,
    startTime: null,
    finishTime: null,
    cropRow: null,
    chemicalUsed: "",
    whp: null,
    ehd: "",
    rateApplied: null,
    quantityApplied: null,
    image: "",
    equipmentMethodUsed: "",
    speed: null,
    deg: null,
    notes: "",
    weatherData: ""
  };

  async callAPI() {
    await fetch("http://localhost:3001/entries/new", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWUzMzc5ODU0ZjNlNmIwNjE1N2IyNTIxIiwiaWF0IjoxNTgwNDMxNzQ5fQ.0gkCC4B_A4mvsoz0n877js6bsokq7Z-LYWCzeSWwQSE"
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
      if (Object.prototype.toString.call(fullParsedData.speed) === "[object String]") {
        this.setState({
          speed: fullParsedData.speed,
          deg: null
        })
      } else {
        const realSpeed = Math.round ((fullParsedData.speed * 3.6) * 10) / 10;

        this.setState({
          speed: realSpeed,
          deg: fullParsedData.deg
        });
      }
    }
    realSpeed();
    console.log(this.state);
  }

  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  componentDidMount() {
    this.callAPI();
  }

  copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="https://material-ui.com/">
          Chemical Auditor
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  render() {
    const {
      step,
      date,
      startTime,
      finishTime,
      cropRow,
      chemicalUsed,
      whp,
      ehd,
      rateApplied,
      quantityApplied,
      image,
      equipmentMethodUsed,
      speed,
      deg,
      notes
    } = this.state;

    const values = {
      date,
      startTime,
      finishTime,
      cropRow,
      chemicalUsed,
      whp,
      ehd,
      rateApplied,
      quantityApplied,
      image,
      equipmentMethodUsed,
      speed,
      deg,
      notes
    };

    if (this.state.deg) {
      switch (step) {
        case 1:
          return (
            <FormEntryDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              Copyright={this.copyright}
            />
          );
        case 2:
          return (
            <FormAdditionalDetails
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
              Copyright={this.copyright}
            />
          );
        case 3:
          return (
            <Confirm
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
              Copyright={this.copyright}
            />
          );
        case 4:
          return <Success />;
        default:
          return null;
      }
    } else if (Object.prototype.toString.call(this.state.speed) === "[object String]"){
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

export default EntryForm;
