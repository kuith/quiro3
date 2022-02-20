import React from 'react';
import { useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';

export default function ServiciosImagen({datos}) {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return(
    <Grid item lg>
      <img 
        src={datos.imagen} 
        alt="Imagen quiromasaje" 
        style={{
        maxWidth:matchesSm ? 300 : "40em", 
        marginRight: matchesMd ? 0 : "1em",
        marginBottom: matchesMd ? "3em" : 0,
        }}/>
    </Grid>
  );
}