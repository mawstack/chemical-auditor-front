import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NavButton extends Component {
  state = {
    toNewEntry: false,
    toViewAllEntries: false,
    toViewSingleEntry: false
  }

  newEntryButtonClick = () => {
    console.log("test");
  }

  allEntriesButtonClick = () => {

  }

  singleEntryButtonClick = () => {
    
  }

  render() {
    return(
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
          onClick={this.singleEntryButtonClick}
          >
            Generate Report
        </Button>
      </>
    );
  };
}

export default NavButton;