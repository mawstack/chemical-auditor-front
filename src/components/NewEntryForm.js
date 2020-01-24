import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  export default function NewEntryFrom() {
    

    // state = {
    //     startTime: "",
    //     finishTime: "",
    //     currentLat: "",
    //     currentLong: "",
    //     cropRow: "",
    //     chemicalUsed: "",
    //     WHP: "",
    //     EHD: "",
    //     rateApplied: "",
    //     quantityApplied: "",
    //     image: "",
    //     equipmentMethodUsed: "",
    //     speed: "",
    //     deg: "",
    //     notes: ""
    // }


    
        const classes = useStyles();
        return (

        <form className={classes.root} noValidate autoComplete="off">  
        <Grid container spacing={3}>
            <Grid item xs={12}>
            {/* <Paper className={classes.paper}>xs=12</Paper> */}
            <TextField 
            className={classes.paper}
            required
            id="outlined-secondary"
            label="Required"
            defaultValue="Start time"
            variant="outlined"
            />
            </Grid>
      
        
            <Grid item xs={12}>
            {/* <Paper className={classes.paper}>xs=12</Paper> */}
            <TextField
            required
            id="outlined-secondary"
            label="Required"
            defaultValue="Finish time"
            variant="outlined"
            />
            </Grid>
      

        
            <Grid item xs={12}>
            {/* <Paper className={classes.paper}>xs=12</Paper> */}
            <TextField
            required
            id="outlined-secondary"
            label="Required"
            defaultValue="Current Location"
            variant="outlined"
            />
            </Grid>
   
        </Grid>
        </form>
        );
        }
    



