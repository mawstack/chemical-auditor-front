import React, { Component } from "react";
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

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="https://material-ui.com/" color="inherit">
        Chemical Auditor
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//as App component needs returned JWT token, declare form onSubmit there then pass into Login??? - 30/1

class Login extends Component {
  constructor() {
    super();
    // const classes = useStyles();
    const domain = process.env.REACT_APP_API_DOMAIN;
  }
    

  onSubmit = (event) => {
    event.preventDefault();
    //event.target.action = endpoint to AJAX request to
    //event.target[0].value = email address entered
    //what is event.target[1]?
    //event.target[2].value = password entered
    //need password value to send to back-end but NOT safe visible in front-end
    //the problem is in Textfield variant="outlined" which creates an extra element box
    //how to circumvent useless outline boxes whilst maintaining styling?
    event.persist();
    console.log(event.target);
    console.log(event.target[0]);
    console.log(event.target[0].value);
    console.log(event.target[1]);
    console.log(event.target[1].value);
    console.log(event.target[2]);
    console.log(event.target[2].value);
  }
  
  onChange = () => {
  
  }
  
  render() {
    const classes = this.useStyles();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.classes.paper}>
          <Avatar className={this.classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={this.classes.form} action={`${this.domain}/login`} onSubmit={this.onSubmit} method="post">
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
              onChange={this.onChange}
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
              className={this.classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <a href={`${this.domain}/register`}>
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

export default Login;
