import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import GServiciosBlock from './gServiciosBlock';
import { Typography } from '@material-ui/core';

export default function GServiciosBlocks({datos}) {

 
  return(
    <>  
      <Hidden smUp>  
        <Typography variant ="h4" style={{marginLeft:"1em", marginBottom:"0.5em"}}>
          Nuestros Servicios
        </Typography>
      </Hidden>
      {/*---Bloque Quiromasaje---*/}
      <GServiciosBlock datos={datos.gQuiromasaje} left={true}/>
      {/*---Bloque Osteopatía---*/}
      <GServiciosBlock datos = {datos.gOsteopatia} left={false}/>
      {/*---Bloque Presoterapia---*/}
      <GServiciosBlock datos = {datos.gPresoterapia} left={true}/>
      {/*---Bloque Deportivo---*/}
      <GServiciosBlock datos = {datos.gDeportivo} left={false}/>
      {/*---Bloque Dietético---*/}
      <GServiciosBlock datos = {datos.gDietetico} left={true}/>
      {/*---Bloque Bonos---*/}
      <GServiciosBlock datos = {datos.gBonos} left={false}/>
      {/*---Bloque Rejuvenecimiento---*/}
      <GServiciosBlock datos = {datos.gRejuvenecimiento} left={true}/>
      {/*---Bloque Tatoo---*/}
      <GServiciosBlock datos = {datos.gTatoo} left={false}/>
    </>
  )
}