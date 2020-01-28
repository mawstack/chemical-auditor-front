import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createRecord } from "./../actions";
import { globalState } from "./../store";
import Login from "./userForms/Login";
import Register from "./userForms/Register";
import NavDrawer from "./shared/NavDrawer";
import EntryForm from "./entryForms/EntryForm";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <>
          {/* <NavDrawer /> */}
            <div>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/new-entry" component={EntryForm} />
            </div>
          </>
        </BrowserRouter>
      </div>
    );
  }
}
//(record-creation-specific connect invocation to be moved to specific relevant [i.e. record making] component later)
const mapStateToProps = globalState => {
  return {
    records: globalState.records
  };
};

export default connect(mapStateToProps, {
  createRecord: createRecord
})(App);
