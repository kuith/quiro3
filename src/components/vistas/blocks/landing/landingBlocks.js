import React from 'react';
import Grid from '@material-ui/core/Grid';
import LandingBlock from './landingBlock';

export default function LandingBlocks({datos}) {
 
  return(
    <>
    <Grid item container justify='center'>
      <LandingBlock datos = {datos.serviciosLanding} blockAlign="left"/>
      <LandingBlock datos = {datos.contactoLanding} blockAlign="right"/>
      <LandingBlock datos = {datos.instalacionesLanding} blockAlign="left"/>
      </Grid>
    </>
  )
}