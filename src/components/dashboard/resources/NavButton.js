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

  reportButtonClick = (event) => {
    event.preventDefault();
    this.props.dispatch(setPdfTrigger(true))
  }

  render() {
    if (this.state.toNewEntry === true) {
      return <Redirect to="/new-entry" />;
    }

    if (this.state.toViewAllEntries === true) {
      return <Redirect to="/entries" />;
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
          onClick={this.reportButtonClick}
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
