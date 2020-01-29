import React, { Component } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('12/01/2020', "05:20", "23:00", "Max"),
    createData('14/01/2020', "06:00", "21:15", "wayne"),
    createData('15/01/2020', "07:20", "23:00", "Angel"),
    createData('16/01/2020', "08:20", "23:00", "Robbie"),
    createData('18/01/2020', "09:20", "23:00", "Harry"),
  ];
  
  const styles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

class DenseTable extends Component {

    state = {
    date:"",    
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
    notes: ""
    }

  render () {
        return (
            <TableContainer component={Paper}>
            <Table className={styles.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Date </StyledTableCell>
                    <StyledTableCell align="right">Starting time</StyledTableCell>
                    <StyledTableCell align="right">Finish time</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
    }
}

export default DenseTable

