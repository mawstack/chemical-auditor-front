import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"

//List/ListItem
class ViewEntryForm extends Component {
    render() {
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