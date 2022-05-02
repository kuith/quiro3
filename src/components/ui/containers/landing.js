import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


import { useMediaQuery } from '@material-ui/core';

import ImagenFondo3 from '../../../util/quiro/images/landing/landing_03.png';
import LandingBlock from '../../vistas/blocks/landing/landingBlock';


const useStyles = makeStyles(theme=>({
  imagen:{
    width:'100%',
    marginTop:0,
    marginBottom:0,
    paddingTop: 0
  },
  linkButton:{
    ...theme.typography.linkButton,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    },
    marginTop:"1em"
  },
}));

export default function Landing({datos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
 

  return(
    <Grid container 
      direction={matchesSm ? 'column' : 'row' }
      alignItems={matchesSm ? 'center' : 'undefined'}
    >
      
      <Grid item xs={5}>
        <img src={ImagenFondo3} alt='Fondo' className={classes.imagen} />
      </Grid>

      <Grid item  container xs={6} 
        style={{marginTop:'3em'}} 
        direction='column'
        alignItems={matchesSm ? 'center' : 'flex-end'}
      >
        <LandingBlock datos = {datos.serviciosLanding}/>
        <LandingBlock datos = {datos.contactoLanding}/>
        <LandingBlock datos = {datos.instalacionesLanding}/>
      </Grid>

    </Grid>
  )
}