import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return(
            <>
                <div id="header-bar">
                    <h1>Chemical Auditor</h1>
                </div>
                <div id="sign-in-register-box">
                    <h2>Sign In</h2>
                    <form>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />
                        <input type="submit" value="Sign in" />
                    </form>
                    <Link to="/register">Register New Account</Link>
                </div>
            </>
        )
    }
}

export default Login;