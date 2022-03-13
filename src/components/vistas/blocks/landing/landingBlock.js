import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  icon: {
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
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

export default function LandingBlock({datos, blockAlign}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  let alineacion = "undefined";

  if( blockAlign === "right") {
    alineacion = "flex-end";
  }
 
  return(
    <Grid item>
        <Grid container alignItems='center' justify= {matchesSm ? "center": alineacion} direction="row" className={classes.espacing}>
          <Grid item 
            style={{marginLeft: matchesSm ? 0 : "7em", textAlign: matchesSm ? "center": undefined}}
          >
            <Typography  variant="h2">
              {datos.titulo}
            </Typography>
            <Typography  variant="subtitle1">
            {datos.subtitulo1}
            </Typography>
            <Button 
              component={Link} to ={datos.link}
              variant="outlined" 
              className={classes.linkButton}
            >
              <span style={{marginRight: 10}}>Más información</span>
            </Button>
           
          </Grid>
          <Grid item style={{marginRight: matchesSm ? 0 : "7em",marginLeft:"7em"}}>
            <img className={classes.icon} src={datos.img} alt="Logo principal"/>
          </Grid>
        </Grid>
      </Grid>
  )

}