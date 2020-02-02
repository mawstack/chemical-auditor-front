import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

class FormAdditionalDetails extends Component {
  handleSubmit = async event => {
    event.preventDefault();

    const {
      date,
      startTime,
      finishTime,
      cropRow,
      chemicalUsed,
      whp,
      ehd,
      rateApplied,
      quantityApplied,
      image,
      equipmentMethodUsed,
      notes
    } = this.props.values;

    const {
      speed,
      deg
    } = this.props;

    console.log(this.props);

    const createUrl = `${process.env.REACT_APP_API_URL}/entries/`;

    await Axios.post(createUrl, {
      date,
      startTime,
      finishTime,
      cropRow,
      chemicalUsed,
      whp,
      ehd,
      rateApplied,
      quantityApplied,
      image,
      equipmentMethodUsed,
      speed,
      deg,
      notes
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.nextStep();
  };

  back = event => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      values: {
        date,
        startTime,
        finishTime,
        cropRow,
        chemicalUsed,
        whp,
        ehd,
        rateApplied,
        quantityApplied,
        image,
        equipmentMethodUsed,
        speed,
        deg,
        notes
      },
      Copyright
    } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Typography component="h1" variant="h3">
            New Entry
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Date" secondary={date} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Start Time" secondary={startTime} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Finish Time" secondary={finishTime} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Crop Row" secondary={cropRow} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Chemical Used" secondary={chemicalUsed} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Withholding Period" secondary={whp} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Earliest Harvest Date" secondary={ehd} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Rate Applied" secondary={rateApplied} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Quantity Applied"
                secondary={quantityApplied}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Image" secondary={image} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Equipment/Method Used"
                secondary={equipmentMethodUsed}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Wind Speed" secondary={speed} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Wind Direction (deg)" secondary={deg} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notes" secondary={notes} />
            </ListItem>
          </List>
          <Button
            className={styles.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Confirm
          </Button>
          <Button
            className={styles.button}
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            onClick={this.back}
          >
            Back
          </Button>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const styles = makeStyles(theme => ({
  container: {
    marginTop: "100px",
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
}));

export default FormAdditionalDetails;
