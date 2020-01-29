import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

        <Grid item xs={12} >
         
            <TextField
            id="outlined-full-width"
            label="WHP"
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

        <Grid item xs={12} >
         
            <TextField
            id="outlined-full-width"
            label="EHD"
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

        <Grid item xs={12} >
         
            <TextField
            id="outlined-full-width"
            label="Rate of application"
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

        <Grid item xs={12} >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>







      </Grid>
    </div>
  );
}