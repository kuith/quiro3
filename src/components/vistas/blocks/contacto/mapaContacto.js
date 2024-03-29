import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles(theme=>({
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

export default function MapaContacto({datos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  
  console.log("SM:" + matchesSm);
  console.log("MD:" + matchesMd);
  console.log("XS:" + matchesXs);

  return(
    <Grid item container direction='column'  xs={11} >
      <Grid item>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.63930035975!2d-3.47840488303857!3d40.46111970287865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4236e02524ee87%3A0x10ebd722b108ade2!2sRonda+de+Saliente%2C+1%2C+28850+Torrej%C3%B3n+de+Ardoz%2C+Madrid!5e0!3m2!1ses!2ses!4v1527496457961" 
          style={{
            width: "100%",
            marginLeft: matchesSm ? "1.5em" : "2em",
            marginRight: matchesXs ? "1.5em" : "2em",
            border: 0
          }} 
          allowfullscreen 
          title="Situación">
        </iframe>
      </Grid>
      
      <Grid item align="center">
        <Typography variant="h6">
          {datos.calle}
        </Typography>
        <Typography variant="h6">
          {datos.ciudad}
        </Typography>
      </Grid>
    </Grid>
  )
}
