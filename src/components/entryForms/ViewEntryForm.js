import React, { Component } from "react";
import { List, ListItemText, makeStyles, Typography, CssBaseline, Container, Box } from "@material-ui/core";

//List/ListItem
class ViewEntryForm extends Component {
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
        }
    } = this.props;

    return(
      <>
        <Container component="main" maxWidth="xs">
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
                  <ListItemText primary="Location: " secondary={location} />
                  <ListItemText primary="Crop Row: " secondary={cropRow} />
                  <ListItemText primary="Chemical Name: " secondary={chemicalName} />
                  <ListItemText primary="WHD / EHD: " secondary={whdEhd} />
                  <ListItemText primary="Rate of Application and Quantity Applied: " secondary={rateQuantity} />
                  <ListItemText primary="Wind Speed / Direction: " secondary={windSpeedDirection} />
                  <ListItemText primary="Equipment / Method Used: " secondary={equipmentMethod} />
                  <ListItemText primary="Image: " />
              </List>
          </Box>
        </Container>
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