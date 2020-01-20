import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { record } from "./../actions";
import Login from "./Login";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/login" component={Login} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, {
    record
})(App);