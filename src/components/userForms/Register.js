import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
// import { connect } from "react-redux";
// import { setJwtToken } from "./../../actions/index";
// import cookie from "js-cookie";
import { Redirect } from "react-router-dom";

export class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    passwordMatch: true,
    toDashboard: false
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, username, password } = this.state;

    const registerURL = `${process.env.REACT_APP_API_URL}/users/register`;

    if (this.state.password === this.state.repeatPassword) {
      // await allowCookiesAxios
      //   .post(registerURL, { email, username, password })
      //   .then(res => {
      //     const jwtToken = cookie.get("jwtToken");
      //     this.props.dispatch(setJwtToken(jwtToken));
      //     this.setState({ toDashboard: true });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      await Axios.post(registerURL, { email, username, password })
        .then(res => {
          this.setState({ toDashboard: true });
        })
        .catch(err => {
          console.log(err);
        });

      this.setState({
        email: "",
        name: "",
        password: "",
        repeatPassword: ""
      });
      this.setState({ passwordMatch: true });
    } else {
      this.setState({ passwordMatch: false });
    }
  };

  passwordMatch() {
    if (this.state.passwordMatch) {
      return (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="repeatPassword"
          label="Repeat Password"
          type="password"
          id="repeatPassword"
          onChange={this.handleChange("repeatPassword")}
          value={this.state.repeatPassword}
        />
      );
    } else {
      return (
        <TextField
          error
          id="outlined-error"
          label="Repeat Password"
          helperText="Password does not match"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="repeatPassword"
          type="password"
          onChange={this.handleChange("repeatPassword")}
          value={this.state.repeatPassword}
        />
      );
    }
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={useStyles.form} onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleChange("email")}
              value={this.state.email}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={this.handleChange("username")}
              value={this.state.username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handleChange("password")}
              value={this.state.password}
            />
            {this.passwordMatch()}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" to="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

function Copyright() {
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

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// Giving access to the jwtToken piece-of-state within globalState to Login
// const mapStateToProps = state => {
//   return {
//     jwtToken: state.jwtToken
//   };
// };

// No second argument (i.e. explicit mapDispatchToProps()) = dispatch() automatically added to this.props
// export default connect(mapStateToProps)(Register);
export default Register;