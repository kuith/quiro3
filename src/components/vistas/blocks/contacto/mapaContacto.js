import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
  precio: {
    fontWeight:"bold",
    paddingLeft:"0.5em"
  },
  margenAbajo:{
    marginBottom:"1em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    }
  },
}));

export default function MapaContacto() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  return(
    <Grid item lg>
       <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.63930035975!2d-3.47840488303857!3d40.46111970287865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4236e02524ee87%3A0x10ebd722b108ade2!2sRonda+de+Saliente%2C+1%2C+28850+Torrej%C3%B3n+de+Ardoz%2C+Madrid!5e0!3m2!1ses!2ses!4v1527496457961" 
          style={{
            height: "100%",
            width: "100%",
            marginBottom: matchesMd ? "3em" : 0,
            border: 0
          }} 
          allowfullscreen 
          title="Situación">
        </iframe>
    </Grid>
  )
}

/* width="600" 
          height="450" 
          frameborder="0" 
          style={{border:0}} */