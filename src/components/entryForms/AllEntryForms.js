import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const styles = makeStyles({
  table: {
    minWidth: 700
  }
});

class AllEntryForms extends Component {
  state = {
    response: "",
    date: "",
    startTime: 0,
    finishTime: 0,
    cropRow: 0,
    chemicalUsed: "",
    whp: 0,
    ehd: "",
    rateApplied: 0,
    quantityApplied: 0,
    image: "",
    equipmentMethodUsed: "",
    speed: 0,
    deg: 0,
    notes: "",
    rows: []
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/entries`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWUzMjZjMTIwOTRkYTUwODFjMmZiZDdiIiwiaWF0IjoxNTgwMzYyNzcwfQ.lI-ifWUazTJCxas67h8oYkhwb0R4IOFrqdIK1LXD2_0"
        }
      })
      .then(resp => {
        this.setState({ rows: resp.data });
      });
  }

  // renderTable (a) {
  //   return a.map( task => {
  //     return (
  //       <>
  //       <StyledTableCell>{task.date}</StyledTableCell>
  //       <StyledTableCell>{task.startTime}</StyledTableCell>
  //       <StyledTableCell>{task.finishTime}</StyledTableCell>
  //       </>
  //     )
  //   } )

  // }

  render() {
    const { rows } = this.state;

    return (
      <TableContainer component={Paper}>
        <Table className={styles.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">User </StyledTableCell>
                        <StyledTableCell align="right">Date </StyledTableCell>
                        <StyledTableCell align="right">Starting time</StyledTableCell>
                        <StyledTableCell align="right">Finish time</StyledTableCell>
                        <StyledTableCell align="right">Crop row</StyledTableCell>
                        <StyledTableCell align="right">Chemical used</StyledTableCell>
                        <StyledTableCell align="right">WHP</StyledTableCell>
                        <StyledTableCell align="right">EHD</StyledTableCell>
                        <StyledTableCell align="right">Rate applied</StyledTableCell>
                        <StyledTableCell align="right">Quantity applied</StyledTableCell>
                        <StyledTableCell align="right">Equipment method used</StyledTableCell>
                        <StyledTableCell align="right">Wind speed</StyledTableCell>
                        <StyledTableCell align="right">Wind direction</StyledTableCell>
                        <StyledTableCell align="right">Notes</StyledTableCell> 
                    </TableRow>
                </TableHead>
         
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="right">{row.user}user</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.date}</StyledTableCell>   
                <StyledTableCell align="right">{row.startTime}starttime</StyledTableCell>
                <StyledTableCell align="right">{row.finishTime}finish</StyledTableCell>
                <StyledTableCell align="right">{row.cropRow}crop</StyledTableCell>
                <StyledTableCell align="right">{row.chemimcalUsed}chemused</StyledTableCell>
                <StyledTableCell align="right">{row.whp}whp</StyledTableCell>
                <StyledTableCell align="right">{row.ehd}ehd</StyledTableCell>
                <StyledTableCell align="right">{row.rateApplied}rateapply</StyledTableCell>
                <StyledTableCell align="right">{row.quantityApplied}qtyapply</StyledTableCell>
                <StyledTableCell align="right">{row.equipmentMethodUsed}equipmentuse</StyledTableCell>
                <StyledTableCell align="right">{row.speed}speed</StyledTableCell>
                <StyledTableCell align="right">{row.deg}deg</StyledTableCell>
                <StyledTableCell align="right">{row.notes}notes</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default AllEntryForms;