import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export class FormEntryDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Typography component="h1" variant="h5">
            New Entry
          </Typography>
          <form className={styles.form} noValidate>
            <TextField
              hintText="Enter Start Time"
              floatingLabelText="Start Time"
              onChange={handleChange("startTime")}
              defaultValue={values.startTime}
            />
            <TextField
              hintText="Enter Finish Time"
              floatingLabelText="Finish Time"
              onChange={handleChange("finishTime")}
              defaultValue={values.finishTime}
            />
            <TextField
              hintText="Enter Crow Row"
              floatingLabelText="Crow Row"
              onChange={handleChange("cropRow")}
              defaultValue={values.cropRow}
            />
            <Button
              type="submit"
              fullWidth
              variant="container"
              color="primary"
            />
          </form>
        </div>
      </Container>
    );
  }
}

const styles = {
  paper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 10
  },
  submit: {
    margin: 10
  }
};
export default FormEntryDetails;
