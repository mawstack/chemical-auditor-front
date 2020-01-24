import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createRecord } from "./../actions";
import { globalState } from "./../store";
// import Login from "./Login";
import SignIn from "./Login";
import NavBar from "./shared/NavBar"
import NewEntryFrom from "./NewEntryForm";


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        {/* <Route exact path="/login" component={Login} /> */}
                        <NavBar />
                        {/* <SignIn /> */}
                        <NewEntryFrom />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

//(record-creation-specific connect invocation to be moved to specific relevant [i.e. record making] component later)
const mapStateToProps = (globalState) => {
    return {
        records: globalState.records
    }
}

export default connect(mapStateToProps, {
    createRecord: createRecord
})(App);