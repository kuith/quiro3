import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
//import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import ServiciosCabecera from './serviciosCabecera';
import ServiciosImagen from './serviciosImagen';

const useStyles = makeStyles(theme=>({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    }
  },
  precio: {
    fontWeight:"bold"
  },
  margenAbajo:{
    marginBottom:"1em"
  }

}));

export default function ServiciosContariner({datos, blockDatos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return(
    <>
      {/* Bloque de encabezado */}
        < ServiciosCabecera datos={datos}/>
      {/* Bloque de imagen */}
      <Grid item container alignItems="center" direction ={matchesMd ? "column": "row"} className={classes.rowContainer}>
        <ServiciosImagen datos={datos} />
        {/* Bloque de datos */}
        <Grid item container direction="column" lg>
          {blockDatos}
        </Grid>
      </Grid>
    </>
  ) 

}
