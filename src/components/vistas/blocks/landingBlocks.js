import React from 'react';

import LandingBlock from './landingBlock';

export default function LandingBlocks({datos}) {
 
  return(
    <>
      <LandingBlock datos = {datos.serviciosLanding} blockAlign="left"/>
      <LandingBlock datos = {datos.contactoLanding} blockAlign="right"/>
      <LandingBlock datos = {datos.instalacionesLanding} blockAlign="left"/>
    </>
  )
}