import React from "react";
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function  Footer()
{
    return (
        <div className="footer">
        <div className="footer_left">
            <img className ="footer_albumlogo" src="https://images-platform.99static.com/yZly4SM58w81oatke_lPn48Ehwk=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/99/99736/attachment_99736617" alt=""/>

            <div className="footer_songinfo">
                <h4>Yeah Baby!</h4>
                <p>Garry Sandhu</p>
            </div>
        </div>

        <div className="footer_center">
            <ShuffleIcon className="footer_green" />

            <SkipPreviousIcon className="footer_icon" />

            <PlayCircleOutlineIcon fontSize="large" className="footer_icon"  />
            
            <SkipNextIcon className="footer_icon" />

            <RepeatIcon className="footer_green" />


        </div>

        <div className="footer_right">
           <Grid container spacing={2}>
               <Grid item>
                   <PlaylistPlayIcon />
               </Grid>

               <Grid item>
                   <VolumeDownIcon/>
               </Grid>

               <Grid item xs>
                   <Slider/>
               </Grid>
           </Grid>
        </div>


        </div>
    );
}

export default Footer;