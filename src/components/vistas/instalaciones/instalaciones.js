import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';

export default function Instalaciones({datos}) {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  const itemData = datos

  const imagenes = itemData.map((item)=>(
    <Grid item style={{marginBottom:"1em", marginLeft:"1em", marginRight:"1em"}}>
      <img src = {item.img} alt={item.title} style={{width:matchesXs ? "350px" : "100%"}}/>
    </Grid>
  ));

  return (
    <>
    <Hidden smUp>  
        <Typography variant ="h4" style={{marginLeft:"1em", marginBottom:"0.5em", marginTop:"1em"}}>
          Nuevas instalaciones
        </Typography>
    </Hidden>
    <Grid 
      container direction='column' 
      justifyContent="space-around" 
      style={{marginTop:"2em"}}
      alignItems="center"
    >
      {imagenes}
    </Grid>
    </>   
  );
}