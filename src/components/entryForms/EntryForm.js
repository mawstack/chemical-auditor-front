import React, { Component } from "react";
import FormEntryDetails from "./FormEntryDetails";
import FormAdditionalDetails from "./FormAdditionalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

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
    this.setState({
      speed: fullParsedData.speed * 3.6,
      deg: fullParsedData.deg
    });
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

    if (this.state.speed) {
      switch (step) {
        case 1:
          return (
            <FormEntryDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <FormAdditionalDetails
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <Confirm
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
            />
          );
        case 4:
          return <Success />;
        default:
          return null;
      }
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default EntryForm;
