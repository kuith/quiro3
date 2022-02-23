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
  },
}));

export default function Bonos({datos}) {
  const classes = useStyles();
  return(
    <Grid item>
      <Typography variant="h4" className={classes.margenAbajo}>
        Bonos de seguimientos completos
      </Typography>
      <Typography variant="body1" paragraph>
        Bono de masajes (3 sesiones): 
        <span className={classes.precio}>{datos.bonoMasajes3} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Bono de masajes (6 sesiones):
        <span className={classes.precio}>{datos.bonoMasajes6} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Bono de masajes (10 sesiones):
        <span className={classes.precio}>{datos.bonoMasajes10} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Bono especial anticelulitico + dieta (5 sesiones presoterapia + 5 masajes + dieta):
        <span className={classes.precio}>{datos.bonoAnticelulitico} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
       Pack Dieta + Rutina Entrenamiento:
        <span className={classes.precio}>{datos.bonoDieta} € </span>.
      </Typography>
      <Typography variant="h6" paragraph>
        TODOS LOS BONOS SON TRANSFERIBLES A OTRAS PERSONAS
      </Typography>
    </Grid>
  )
}