import React from 'react'
import "./../App.css";
import FaceTime from "./../images/FaceTime.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      marginTop:'50px'
    }
  }));

export default function Controltext() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        
    <Grid container spacing={6} >

            <Grid item xs={12} sm={12}>
                <h2 id="control-text">Control <br/> your microphone <br/> anywhere</h2>
            </Grid>

            <Grid item xs={12} sm={12}>
            <img src={FaceTime} alt="hangout logo"/>
            </Grid>
            </Grid>
            
        </div>
    )
}
