import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

class Success extends Component {
  state = {
    toDash: false,
    toEntry: false
  }

  render() {
    if (this.state.toDash === true) {
      return <Redirect to="/" />;
    }

    if (this.state.toEntry === true) {
      return <Redirect to="/entries" />;
    }

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
              onClick={() => {
                this.setState({ toEntry: true })
              }}
            >View Entry</Button>
            <br />
            <Button
              className={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                this.setState({ toDash: true })
              }}
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
