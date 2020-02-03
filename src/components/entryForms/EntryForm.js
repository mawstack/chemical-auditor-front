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
    await fetch(`${process.env.REACT_APP_API_URL}/entries/new`, {
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

    if (deg) {
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
    } else if (Object.prototype.toString.call(speed) === "[object String]"){
      return (
      <div>
        <h3>{speed}</h3>
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
