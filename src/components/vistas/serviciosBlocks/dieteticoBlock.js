import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  precio: {
    fontWeight:"bold",
    paddingLeft:"0.5em"
  },
  margenAbajo:{
    marginBottom:"1em"
  }

}));

export default function DieteticoBlock({datos}) {
  const classes = useStyles();
  return(
    <Grid item container>
      <Grid item>
        <Typography variant="h4" className={classes.margenAbajo}>
          Asesoramiento dietético con control cada 20 o 30 dias:
        </Typography>
        <Typography variant="body1">
          Primera sesión: <span className={classes.precio}>{datos.primera} </span>€.
        </Typography>
        <Typography variant="body1">
          Seguimiento: <span className={classes.precio}>{datos.seguimiento} </span>€.
        </Typography>
      </Grid>
    </Grid>
  )
}