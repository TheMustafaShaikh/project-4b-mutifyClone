import React from 'react'
import hangout from "./../images/Hangouts.png";
import Skype from "./../images/Skype.png";
import Slack from "./../images/Slack.png";
import GoToMeeting from "./../images/GoToMeetings.png"
import Webex from "./../images/Webex.png"
import Zoom from "./../images/Zoom.png"
import "./../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));



export default function AnimatedLogo() {
  const classes = useStyles();
  const { ref, playState } = useWebAnimations({
    keyframes: [
    {transform:"translate(0,50px)"},
    {transform:"translate(0,-50px)"},
    {transform:"translate(0,50px)"},

],
    timing: {
      duration: 5000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
    }
  });
    return (
        <div className={classes.root} ref={ref} >
            <Grid container spacing={6} id="grid">
            <Grid item xs={12} sm={4}>
            <img src={hangout} alt="hangout logo" width={50} id="hangout"/>
            </Grid> 
            <Grid item xs={12} sm={4}>
            <img src={Skype} alt="skype logo" width={50} id="skype"/>
            </Grid> 
                
            <Grid item xs={12} sm={4}>
            <img src={Slack} alt="slack logo" width={50} id="slack"/>
            </Grid>         
            
            </Grid>


            <Grid container spacing={6} id="grid">
            <Grid item xs={12} sm={4}>
            <img src={GoToMeeting} alt="goto logo" width={50} id="hangout"/>
            </Grid> 
            <Grid item xs={12} sm={4}>
            <img src={Zoom} alt="Zoom logo" width={50} id="skype"/>
            </Grid> 
                
            <Grid item xs={12} sm={4}>
            <img src={Webex} alt="Webex logo" width={50} id="slack"/>
            </Grid>         
            
            </Grid>
            
        </div>
    )
}
