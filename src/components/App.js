import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setPdfTrigger } from "./../actions";
import Login from "./userForms/Login";
import Register from "./userForms/Register";
import NavDrawer from "./shared/NavDrawer";
import EntryForm from "./entryForms/EntryForm";
import Dashboard from "./dashboard/Dashboard";
import Container from "@material-ui/core/Container";
import EntryView from "./entryViews/EntryView";
import AllEntryView from "./entryViews/AllEntryView";
import Report from "./pdf-generator/Report";
import { PDFViewer } from "@react-pdf/renderer";
require("dotenv").config();

class App extends Component {


  render() {
    const { pdfTrigger } = this.props;
    if (pdfTrigger) {
      return (
        // <PDFViewer>
        //   <Report />
        // </PDFViewer>
        <div>Hello!</div>
      );
    }

    return (
      <Container component="main" maxWidth="xs">
        <BrowserRouter>
          <NavDrawer />
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/new-entry" component={EntryForm} />
            <Route path="/entries/:id" component={EntryView} />
            <Route exact path="/entries" component={AllEntryView} />
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    pdfTrigger: state.pdfTrigger
  };
};

// export default connect(mapStateToProps, {
//   // required pieces of state (1st object) + required actions (2nd object)
// })(App);

export default connect(mapStateToProps)(App);
