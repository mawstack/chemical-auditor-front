import React, { Component } from "react";
// import axios from "axios";
import allowCookiesAxios from "./../../apis/allowCookiesAxios";
import { connect } from "react-redux";
import { setJwtToken } from "./../../actions/index";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import cookie from "js-cookie";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    toDashboard: false
  }
  
  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value});
  }

  handleSubmit = async event => {
    event.preventDefault();
    const domain = `${process.env.REACT_APP_API_URL}/login`;
    const { email, password } = this.state;
    
    await allowCookiesAxios.post(domain, { email, password })
      .then((res) => {
        const jwtToken = cookie.get("jwtToken");
        this.props.dispatch(setJwtToken(jwtToken));
        this.setState({ toDashboard: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const register = `http://localhost:3000/register`;
    
    if (this.state.toDashboard === true) {
      return(
        <Redirect to="/" />
      )
    }
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              autoComplete="email"
              autoFocus
              onChange={this.handleChange("email")}
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
              autoComplete="current-password"
              onChange={this.handleChange("password")}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <a href={`${register}`}>
                  Don't have an account? Sign Up
                </a>
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
const mapStateToProps = state => {
  return {
    jwtToken: state.jwtToken
  };
};

// No second argument (i.e. explicit mapDispatchToProps()) = dispatch() automatically added to this.props
export default connect(mapStateToProps)(Login);
