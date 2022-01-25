import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import ServiciosBlock from './LandingBlocks/landingBlock';


const useStyles = makeStyles(theme=>({
   mainContainer:{
     marginTop:"3em"
   },   
}));

export default function Inicio({datosServicios, datosContacto, datosInstalaciones}) {
  const classes = useStyles();
 

  return(
    <Grid container direction="column" className={classes.mainContainer}>
      {/*---Bloque servicios---*/}
      <ServiciosBlock datos = {datosServicios} blockAlign="left"/>

      {/*---Bloque Contacto---*/}
      <ServiciosBlock datos = {datosContacto} blockAlign="right"/>


      {/*---Bloque instalaciones---*/}
      <ServiciosBlock datos = {datosInstalaciones} blockAlign="left"/>

    </Grid>
  )
}