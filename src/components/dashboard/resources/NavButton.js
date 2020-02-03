import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NavButton extends Component {
  render() {
    return(
      <>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.props.newEntryButtonClick}
        >
          Create New Entry
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          // onClick={this.newEntryButtonClick}
        >
          View All Entries
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          // onClick={this.newEntryButtonClick}
          >
            Generate Report
        </Button>
      </>
    );
  };
}

export default NavButton;