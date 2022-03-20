import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  linkButton:{
    ...theme.typography.linkButton,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    },
    marginTop:"1em"
  },
  espacing: {
    marginTop:"1em"
  },

}));

export default function LandingBlock({datos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
 
  return(
   <>
    <Grid item 
      style={{marginLeft: matchesSm ? 0 : "7em", textAlign: matchesSm ? "center": undefined}}
      align="right"
    >
        
      <Typography  variant= {matchesXs ? "h4" : matchesSm ? "h3": "h2"} >
        {datos.titulo}
      </Typography>

      <Typography  variant="subtitle1">
        {datos.subtitulo1}
      </Typography>
    </Grid>
    
    <Grid item style={{marginBottom:"4em"}}>
      <Button 
        component={Link} to ={datos.link}
        variant="outlined" 
        className={classes.linkButton}
      >
        {datos.boton}
      </Button>
    </Grid>
  </>
      
  )

}