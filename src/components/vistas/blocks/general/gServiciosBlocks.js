import React from 'react';

import GServiciosBlock from './gServiciosBlock';

export default function GServiciosBlocks({datos}) {
 
  return(
    <>      
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