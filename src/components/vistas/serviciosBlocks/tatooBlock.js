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

export default function Tatoo({datos}) {
  const classes = useStyles();
  return(
    <Grid item>
      <Typography variant="body1" paragraph>
      Si estás pensando en elimiar tu tatuaje, ahora es el momento.
      </Typography>
      <Typography variant="body1" paragraph>
        Consulta nuestros precios dependiendo del tamaño y color.
      </Typography>
      <Typography variant="body1" paragraph>
        Tarifa desde 
        <span className={classes.precio}>{datos.tatoo} € </span>.
      </Typography>
    </Grid>
  )
}