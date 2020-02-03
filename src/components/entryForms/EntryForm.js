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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWUyYTc2NDk5NTNhZTcxZDVhZmU5ZDdhIiwiaWF0IjoxNTgwNjkxMTA2LCJleHAiOjE1ODA3Nzc1MDZ9.P1YuU9f_8q4bKHCpNMHTw8_g4AYvBuS7c_N_IOZ82Xo"
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
