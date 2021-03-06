import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

class FormEntryDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, Copyright } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Typography component="h1" variant="h3">
            New Entry
          </Typography>
          <form className={styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Operator Name"
              name="user"
              onChange={handleChange("user")}
              defaultValue={values.user}
            />
            <br />
            <TextField
              id="date"
              label="Date"
              type="date"
              required
              fullWidth
              margin="normal"
              defaultValue={values.date}
              className={styles.textField}
              onChange={handleChange("date")}
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <TextField
              id="startTime"
              label="Start Time"
              type="startTime"
              required
              fullWidth
              margin="normal"
              defaultValue={values.startTime || "00:00"}
              className={styles.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
              onChange={handleChange("startTime")}
            />
            <TextField
              id="finishTime"
              label="Finish Time"
              type="finishTime"
              required
              fullWidth
              margin="normal"
              defaultValue={values.finishTime || "23:59"}
              className={styles.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
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
              onChange={handleChange("whp")}
              defaultValue={values.whp}
            />
            <TextField
              id="ehd"
              label="Earliest Harvest Date"
              type="date"
              className={styles.textField}
              defaultValue={values.ehd}
              InputLabelProps={{
                shrink: true
              }}
              onChange={handleChange("ehd")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="rateApplied"
              label="Rate Applied"
              name="rateApplied"
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
            >
              Continue
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const styles = makeStyles(theme => ({
  container: {
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap"
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
    width: 200
  }
}));

export default FormEntryDetails;
