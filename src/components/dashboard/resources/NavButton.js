import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setPdfTrigger } from "./../../../actions/index";

class NavButton extends Component {
  state = {
    toNewEntry: false,
    toViewAllEntries: false,
    toViewSingleEntry: false
  };

  newEntryButtonClick = () => {
    this.setState({ toNewEntry: true });
  };

  allEntriesButtonClick = () => {
    this.setState({ toViewAllEntries: true });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    console.log("test!", event);
  
    //To set pdfTrigger to true
    this.props.dispatch(setPdfTrigger(true))
  }

  render() {
    console.log(this.props);

    if (this.state.toNewEntry === true) {
      return <Redirect to="/new-entry" />;
    }

    if (this.state.toViewAllEntries === true) {
      return <Redirect to="/entries" />;
    }

    if (this.state.toViewSingleEntry === true) {
      return (
        //needs to be fixed to be dynamic
        <Redirect to="/entry-view" />
      );
    }

    return (
      <>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.newEntryButtonClick}
        >
          Create New Entry
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.allEntriesButtonClick}
        >
          View All Entries
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.handleButtonClick}
        >
          Generate Report
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pdfTrigger: state.pdfTrigger
  };
}

export default connect(mapStateToProps)(NavButton);
