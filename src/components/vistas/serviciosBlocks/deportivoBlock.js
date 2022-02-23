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

export default function DeportivoBlock({datos}) {
  const classes = useStyles();
  return(
    <Grid item container>
      <Grid item>
        <Typography variant="h4">
          Para conseguir volumen muscular:
        </Typography>
        <Grid item className={classes.margenAbajo}>
          <Typography variant="body1">
           Tarifa: <span className={classes.precio}>{datos.volumen} </span>€ (por tabla).
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          Para conseguir tonificacion y definicion:
        </Typography>
        <Grid item className={classes.margenAbajo}>
          <Typography variant="body1">
           Tarifa: <span className={classes.precio}>{datos.tonificacion} </span>€ (por tabla).
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}