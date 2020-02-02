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
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

// import AddIcon from "@material-ui/icons/Add";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import NavigationIcon from "@material-ui/icons/Navigation";
// import Button from "@material-ui/core/Button";

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

  async apiCall() {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/entries`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWUzMzc5ODU0ZjNlNmIwNjE1N2IyNTIxIiwiaWF0IjoxNTgwNDMxNzQ5fQ.0gkCC4B_A4mvsoz0n877js6bsokq7Z-LYWCzeSWwQSE"
        }
      })
      .then(resp => {
        this.setState({ rows: resp.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.apiCall();
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
              <StyledTableCell align="right">
                Equipment method used
              </StyledTableCell>
              <StyledTableCell align="right">Wind speed</StyledTableCell>
              <StyledTableCell align="right">Wind direction</StyledTableCell>
              <StyledTableCell align="right">Notes</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="right">{row.user}user</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.startTime}starttime
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.finishTime}finish
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.cropRow}crop
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.chemimcalUsed}chemused
                </StyledTableCell>
                <StyledTableCell align="right">{row.whp}whp</StyledTableCell>
                <StyledTableCell align="right">{row.ehd}ehd</StyledTableCell>
                <StyledTableCell align="right">
                  {row.rateApplied}rateapply
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.quantityApplied}qtyapply
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.equipmentMethodUsed}equipmentuse
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.speed}speed
                </StyledTableCell>
                <StyledTableCell align="right">{row.deg}deg</StyledTableCell>
                <StyledTableCell align="right">
                  {row.notes}notes
                  <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                  </Fab>
                </StyledTableCell>

                <StyledTableCell align="right">
                  {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default AllEntryForms;
