import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

class FormAdditionalDetails extends Component {

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
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
              id="image"
              label="Image URL"
              name="image"
              onChange={handleChange("image")}
              defaultValue={values.image}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="equipmentMethodUsed"
              label="Equipment/Method Used"
              name="equipmentMethodUsed"
              onChange={handleChange("equipmentMethodUsed")}
              defaultValue={values.equipmentMethodUsed}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="speed"
              label="Wind Speed (km/h)"
              name="speed"
              onChange={handleChange("speed")}
              defaultValue={values.speed}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="deg"
              label="Wind Direction (Meteorological degrees)"
              name="deg"
              onChange={handleChange("deg")}
              defaultValue={values.deg}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="notes"
              label="Notes"
              name="notes"
              onChange={handleChange("notes")}
              defaultValue={values.notes}
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
            <Button
              className={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              onClick={this.back}
            >
              Back
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
    display: "flex",
    flexWrap: "wrap",
    marginTop: "100px"
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

export default FormAdditionalDetails;
