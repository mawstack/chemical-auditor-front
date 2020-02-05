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
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

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

class AllEntryView extends Component {
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
            `Bearer ${this.props.jwtToken}`
        }
      })
      .then(res => {
        res.data.map((entry) => {
          entry["link"] = `entries/${entry["_id"]}`;
        })
        this.setState({ rows: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {

    if (!this.props.jwtToken) {
      return <Redirect to="/login" />
    }

    const { rows } = this.state;

    return (
      <>
        <TableContainer component={Paper}>
          <Table className={styles.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">View Entry</StyledTableCell>
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
                  <StyledTableCell align="right">
                    <Link to={row.link}>Link</Link>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.user}
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {row.date}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.startTime}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.finishTime}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.cropRow}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.chemicalUsed}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.whp}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.ehd}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.rateApplied}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.quantityApplied}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.equipmentMethodUsed}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.speed}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.deg}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {row.notes}
                    <Fab color="secondary" aria-label="edit">
                      <EditIcon />
                    </Fab>
                  </StyledTableCell>

                  <StyledTableCell align="right">
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jwtToken: state.jwtToken
  }
}

export default connect(mapStateToProps)(AllEntryView);
