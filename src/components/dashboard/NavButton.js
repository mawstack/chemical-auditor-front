import React from "react";
import Button from "@material-ui/core/Button";


export default function NavButton() {
  return (
    <>

    <Button variant="contained" color="primary" disableElevation href="http://localhost:3000/new-entry">
    Create New Entry
      
    </Button>
    <br/>
    <Button variant="contained" color="primary" disableElevation href="http://localhost:3000/allentries">
      View All Entries
    </Button>
    <br/>
    <Button variant="contained" color="primary" disableElevation>
      Generate Report
    </Button>

    </>
  );
}
