import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ipodLeft from "./../images/airpods-left.png";
import ipodRight from "./../images/airpods-right.png"
import screen from "./../images/muted-screen.png"
import useWebAnimations,{fadeInBottomLeft} from "@wellyshen/use-web-animations";
import "./../App.css"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function Ipodanimation() {
    const classes = useStyles();
    const { ref, animate } = useWebAnimations({...fadeInBottomLeft})

    return (
        <div>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <div className="laptop">
                <div ref={ref}>
                <img src={ipodLeft} alt="ipod-left"/>
                <img src={ipodRight} alt="ipod-Right"/>
                <img src={screen} alt="muted screen" id="screen"/> 
                </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                 <h1 className="laptop-heading">Stay muted even on a<br /> newly connected device</h1>
                 <p className="laptop-text">If you mute your mic on a call and switch to a new <br/> device, such as your AirPods, the app will detect<br/> the change and mute the new device as well</p>
            </Grid>

        </Grid>
            
        </div>
    )
}
