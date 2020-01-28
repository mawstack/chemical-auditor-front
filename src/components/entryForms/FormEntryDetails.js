import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

class FormEntryDetails extends Component {
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
          <Typography component="h1" variant="h3">
            New Entry
          </Typography>
          <form className={styles.form} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2020-01-01"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              id="startTime"
              label="Start Time"
              type="startTime"
              defaultValue="00:00"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={handleChange("startTime")}
            />
            <TextField
              id="finishTime"
              label="Finish Time"
              type="finishTime"
              defaultValue="11:59"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={handleChange("finishTime")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cropRow"
              label="Crop Row"
              name="cropRow"
              autoFocus
              floatingLabelText="Crop Row"
              onChange={handleChange("cropRow")}
              defaultValue={values.cropRow}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="chemicalUsed"
              label="Chemical Used"
              name="chemicalUsed"
              autoFocus
              floatingLabelText="Chemical Used"
              onChange={handleChange("chemicalUsed")}
              defaultValue={values.chemicalUsed}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="whp"
              label="Withholding Period"
              name="whp"
              autoFocus
              floatingLabelText="Withholding Period"
              onChange={handleChange("whp")}
              defaultValue={values.whp}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ehd"
              label="Earliest Harvest Date"
              name="ehd"
              autoFocus
              floatingLabelText="Earliest Harvest Date"
              onChange={handleChange("ehd")}
              defaultValue={values.ehd}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="rateApplied"
              label="Rate Applied"
              name="rateApplied"
              autoFocus
              floatingLabelText="Rate Applied"
              onChange={handleChange("rateApplied")}
              defaultValue={values.rateApplied}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="quantityApplied"
              label="Quantity Applied"
              name="quantityApplied"
              autoFocus
              floatingLabelText="Quantity Applied"
              onChange={handleChange("quantityApplied")}
              defaultValue={values.quantityApplied}
            />
            <Button
              className={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.continue}
            >Continue</Button>
          </form>
        </div>
      </Container>

    );
  }
}

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));

export default FormEntryDetails;
