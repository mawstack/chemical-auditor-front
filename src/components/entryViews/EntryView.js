import React, { Component } from "react";
import {
  List,
  ListItemText,
  makeStyles,
  CssBaseline,
  Container,
  Box
} from "@material-ui/core";
import axios from "axios";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";

class EntryView extends Component {
  state = { entry: null };

  async apiCall() {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/entries/${this.props.match.params.id}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${this.props.jwtToken}`
        //   }
        // }
      )
      .then(res => {
        this.setState({ entry: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    // if (!this.props.jwtToken) {
    //   return <Redirect to="/login" />;
    // }

    if (!this.state.entry) {
      return <h1>Error - Could not connect to the database.</h1>;
    } else {
      const {
        date,
        startTime,
        finishTime,
        cropRow,
        chemicalUsed,
        WHP,
        EHD,
        rateApplied,
        quantityApplied,
        image,
        equipmentMethodUsed,
        speed,
        deg,
        notes
      } = this.state.entry;

      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={styles.paper}>
            <List>
              <ListItemText primary="Date: " secondary={date} />
              <ListItemText primary="Start Time: " secondary={startTime} />
              <ListItemText primary="Finish Time: " secondary={finishTime} />
              <ListItemText primary="Crop Row: " secondary={cropRow} />
              <ListItemText primary="Chemical Used " secondary={chemicalUsed} />
              <ListItemText primary="Witholding Period: " secondary={WHP} />
              <ListItemText primary="Earliest Harvest Date: " secondary={EHD} />
              <ListItemText primary="Rate Applied: " secondary={rateApplied} />
              <ListItemText
                primary="Quantity Applied: "
                secondary={quantityApplied}
              />
              <ListItemText
                primary="Equipment Method Used: "
                secondary={equipmentMethodUsed}
              />
              <ListItemText primary="Wind Speed: " secondary={speed} />
              <ListItemText primary="Wind Degrees:  " secondary={deg} />
              <ListItemText primary="Notes: " secondary={notes} />
              <ListItemText primary="Image: " secondary={image} />
            </List>
          </Box>
        </Container>
      );
    }
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
}));

// const mapStateToProps = state => {
//   return {
//     jwtToken: state.jwtToken
//   };
// };

// export default connect(mapStateToProps)(EntryView);
export default EntryView;
