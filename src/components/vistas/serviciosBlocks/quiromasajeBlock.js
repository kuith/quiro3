import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  precio: {
    fontWeight:"bold"
  },
  margenAbajo:{
    marginBottom:"1em"
  }

}));

export default function QuiromasajeBlock({datos}) {
  const classes = useStyles();

  return(
    <Grid item>
      <Typography variant="h4" className={classes.margenAbajo}>
        MASAJES Y TARIFAS (Individuales, sin bono).
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje deportivo + osteopatia (a criterio del profesional): 
        <span className={classes.precio}>{datos.quiromasajeDeportivo} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje relajante + osteopatia (a criterio del profesional): 
        <span className={classes.precio}>{datos.quiromasajeRelajante} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje circulatorio: 
        <span className={classes.precio}>{datos.quiromasajeCirculatorio} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje descontracturante: 
        <span className={classes.precio}>{datos.quiromasajeDescontracturante} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje recuperador de lesiones + osteopatia (a criterio del profesional): 
        <span className={classes.precio}>{datos.quiromasajeRecuperador} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje deportistas + osteopatia (a criterio del profesional) con descuento ADM y GO FIT: 
        <span className={classes.precio}>{datos.quiromasajeDeportistas} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Masaje jubilados + osteopatia (a criterio del profesional) con descuento CARNET JUBILADO: 
        <span className={classes.precio}>{datos.quiromasajeJubilados} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        OTROS: Llame e informese, estaremos encantados de atenderle.
      </Typography>
      <Typography variant="h6" className={classes.margenAbajo}>{datos.subtextoImagen1}</Typography>
    </Grid>
);
}