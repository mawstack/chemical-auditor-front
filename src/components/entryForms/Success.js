import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class Success extends Component {
  continue = event => {
    event.preventDefault();
    // Here is where we will send data to our API & process data
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Typography component="h1" variant="h3">
            Entry Created
          </Typography>
          <Button
              className={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >View Entry</Button>
            <Button
              className={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >View Dashboard</Button>
        </div>
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
    width: "100%",
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

export default Success;
