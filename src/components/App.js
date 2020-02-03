import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { (required action names) } from "./../actions";
// import { globalState } from "./../store";
import Login from "./userForms/Login";
import Register from "./userForms/Register";
import NavDrawer from "./shared/NavDrawer";
import EntryForm from "./entryForms/EntryForm";
// import DenseTable from "./dashboard/RecentEntryTable";
import Dashboard from "./dashboard/Dashboard";
import Container from "@material-ui/core/Container";
import EntryView from "./entryViews/EntryView";
import AllEntryView from "./entryViews/AllEntryView";

require("dotenv").config();

class App extends Component {
  render() {

    return (
      <Container component="main" maxWidth="xs">
        <BrowserRouter>
            <NavDrawer />
            <div>
              <Route exact path="/" component={Dashboard} render={(props) => <Dashboard {...props} />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/new-entry" component={EntryForm} />
              <Route exact path="/entry-view" component={EntryView} />
              <Route exact path="/all-entries" component={AllEntryView} />
            </div>
        </BrowserRouter>
      </Container>
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
  // required pieces of state (1st object) + required actions (2nd object)
})(App);
