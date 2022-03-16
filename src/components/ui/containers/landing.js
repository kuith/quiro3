import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import ImagenFondo from '../../../util/images/landing/landing.png';


const useStyles = makeStyles(theme=>({
  backGround: {
  backgroundImage:`url(${ImagenFondo})`,
  backgroundPosition:'center',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  height:'60em'
  },
  imagen:{
    width:'100%',
    marginTop:0,
    marginBottom:0,
    paddingTop: 0
  },
  fondoVerde:{
    backgroundColor:"#ccf8e8"
  }
}));

export default function Landing({datos}) {
  const classes = useStyles();
 

  return(
    <Grid container direction='row'>
      <Grid item lg={7}>
        <img src={ImagenFondo} alt='Fondo' className={classes.imagen} />
      </Grid>
      <Grid item lg={5} className={classes.fondoVerde}>
        <Typography>
          una cosa
        </Typography>
        <Typography>
          una cosakjkj
        </Typography>
      </Grid>
    </Grid>
  )
}