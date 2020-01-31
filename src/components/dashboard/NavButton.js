import React from 'react';
import Button from '@material-ui/core/Button';

export default function NavButton() {
  return (
    <>
    <Button variant="contained" color="primary" disableElevation >
      Create New Entry
    </Button>

    <Button variant="contained" color="primary" disableElevation>
      View All Entries
    </Button>

    <Button variant="contained" color="primary" disableElevation>
      Generate Report
    </Button>

    </>
  );
}