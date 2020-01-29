import React, { Component } from "react";
import { List, ListItemText, makeStyles, Typography, CssBaseline, Container, Box } from "@material-ui/core";
import axios from "axios";

class ViewEntryForm extends Component {
  render() {
    const request = {
      url: "http://localhost:3001/entries/5e279f8c1426860cb4428c5d",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWUyYTc2NDk5NTNhZTcxZDVhZmU5ZDdhIiwiaWF0IjoxNTgwMjczMDAyLCJleHAiOjE1ODAzNTk0MDJ9.M34e3QokEUABn1O80u5Sg-HjzAB9vxLKsxtN7gKUTA4"
      }
    }
    axios(request)
      .then(res => {
        const test = res;
        console.log(test);
      })
      .catch(err => {
        const test = err;
      });

    // const {
    //   values: {
    //       date,
    //       startTime,
    //       finishTime,
    //       cropRow,
    //       chemicalUsed,
    //       whp,
    //       ehd,
    //       rateApplied,
    //       quantityApplied,
    //       image,
    //       equipmentMethodUsed,
    //       speed,
    //       deg,
    //       notes
    //     }
    // } = /* a call to the API */;

    return(
      <>
        {/* <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={styles.paper}>
            <Box id="header">
              <Typography component="p" variant="p">
                  Entry (date) - XXX
              </Typography>
              <Typography component="p" variant="p">
                  (Operator Name)
              </Typography>
            </Box>
            <List>
              <ListItemText primary="Date: " secondary={date} />
              <ListItemText primary="Start Time: " secondary={startTime} />
              <ListItemText primary="Finish Time: " secondary={finishTime} />
              <ListItemText primary="Crop Row: " secondary={cropRow} />
              <ListItemText primary="Chemical Used " secondary={chemicalUsed} />
              <ListItemText primary="Witholding Period: " secondary={whp} />
              <ListItemText primary="Earliest Harvest Date: " secondary={ehd} />
              <ListItemText primary="Rate Applied: " secondary={rateApplied} />
              <ListItemText primary="Quantity Applied: " secondary={quantityApplied} />
              <ListItemText primary="Image: " secondary={image} />
              <ListItemText primary="Equipment Method Used: " secondary={equipmentMethodUsed} />
              <ListItemText primary="Wind Speed: " secondary={speed} />
              <ListItemText primary="Wind Degrees:  " secondary={deg} />
              <ListItemText primary="Notes: " secondary={notes} />
            </List>
          </Box>
        </Container> */}
      </>
    )
  }
}

const styles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  })
);

export default ViewEntryForm;