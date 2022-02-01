import React from 'react';

import GServiciosBlock from './gServiciosBlock';

export default function GServiciosBlocks({datos}) {
 
  return(
    <>      
      {/*---Bloque Quiromasaje---*/}
      <GServiciosBlock datos = {datos.gQuiromasaje} blockAlign="left"/>
      {/*---Bloque Osteopatía---*/}
      <GServiciosBlock datos = {datos.gOsteopatia} blockAlign="left"/>
      {/*---Bloque Presoterapia---*/}
      <GServiciosBlock datos = {datos.gPresoterapia} blockAlign="left"/>
      {/*---Bloque Deportivo---*/}
      <GServiciosBlock datos = {datos.gDeportivo} blockAlign="left"/>
      {/*---Bloque Dietético---*/}
      <GServiciosBlock datos = {datos.gDietetico} blockAlign="left"/>
      {/*---Bloque Bonos---*/}
      <GServiciosBlock datos = {datos.gBonos} blockAlign="left"/>
      {/*---Bloque Rejuvenecimiento---*/}
      <GServiciosBlock datos = {datos.gRejuvenecimiento} blockAlign="left"/>
      {/*---Bloque Tatoo---*/}
      <GServiciosBlock datos = {datos.gTatoo} blockAlign="left"/>
    </>
  )
}