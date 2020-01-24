import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));

export default function NewEntryForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        

        {/* start time */}
        <Grid item xs={12} sm={6}>
          
        <TextField
          label="Start time"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
          <TextField
          label="Finish time"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
          fullWidth
          margin="normal"
          
        />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
          <TextField
          label="Current Location"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
          fullWidth
          margin="normal"
          
        />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
          <TextField
          label="Crop row"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
          fullWidth
          margin="normal"
          
        />
        </Grid>

          {/* chemical used */}
          <Grid item xs={12} >
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
            <TextField
            id="outlined-full-width"
            label="Chemical used"
            style={{ margin: 8 }}
            // placeholder=""
            helperText="Full width!"
            fullWidth
            variant="outlined"
            margin="normal"
            // InputLabelProps={{
            //     shrink: true,
            // }}
            />
        </Grid>















      </Grid>
    </div>
  );
}