import React from 'react';
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
  rightImages:{
   marginTop: "2em",
   marginRight: "10%"
  },
  leftText:{
   marginLeft: "2%"
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
  servicesBlock: {
    minWidth:"21.5em",
    marginLeft: "1em",
    marginRight: "2em"
  }
}));

export default function Inicio({datos, blockAlign}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  let alineacion = "undefined";
  let margen = "marginLeft";

  if( blockAlign === "right") {
    alineacion = "flex-end";
    margen = "marginRight";
  }

  console.log(margen);

  

  return(
    <Grid item>
        <Grid container justify= {matchesSm ? "center": alineacion} direction="row" className={classes.espacing}>
          <Grid item style={{marginLeft: matchesSm ? 0 : "5em", textAlign: matchesSm ? "center": undefined}}>
            <Typography  variant="h2">
              {datos.titulo}
            </Typography>
            <Typography  variant="subtitle1">
            {datos.subtitulo1}
            </Typography>
            <Button variant="outlined" className={classes.linkButton}>
              <span style={{marginRight: 10}}>Más información</span>
            </Button>
          </Grid>
          <Grid item style={{marginRight: matchesSm ? 0 : "5em"}}>
            <img className={classes.icon} src={datos.img} alt="Logo principal"/>
          </Grid>
        </Grid>
      </Grid>
  )

}