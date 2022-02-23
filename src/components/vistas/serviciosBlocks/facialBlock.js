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

export default function Facial({datos}) {
  const classes = useStyles();
  return(
    <Grid item>
      <Typography variant="body1" paragraph>
        Tarifa desde 
        <span className={classes.precio}>{datos.facial} € </span>.
      </Typography>
      <Typography variant="body1" paragraph>
        Eliminación de toxinas, eleva la temperatura de la piel destruyendo la dermis muerta para activar la producción de colágeno y elastina, disminuyendo grasa, flacidez y marcas de expresión
      </Typography>
      <Typography variant="body1" paragraph>
        También se eliminan manchas color café, se dismimulan las estrías, elimina hongos de uñas, marcas de acné y capilares.
      </Typography>
    </Grid>
  )
}