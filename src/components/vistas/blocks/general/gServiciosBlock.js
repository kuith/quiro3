import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme=>({
  icon: {
    marginTop: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  linkButton:{
    ...theme.typography.linkButton,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    },
    marginTop:"1.5em"
  },

}));

export default function GServiciosBlock({datos, left}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const alineacion = left;
  

  const imagen = (
    <img src={datos.imagen} alt="Imagen" style={{ width: "100%"}}/>
  );

  const texto = (  
   <>
      <Typography  variant="h2">
        {datos.titulo}
      </Typography>
      <Typography  variant="subtitle1">
        Desde: {datos.precio}
      </Typography>
      <Typography  variant="subtitle1">
        {datos.aclaracion}
      </Typography>
      <Typography  variant="h6">
        {datos.texto}
      </Typography>
      
      <Button 
        component={Link} to ={datos.link}
        variant="outlined" 
        className={classes.linkButton}
      >
        <span style={{marginRight: 10}}>Más información</span>
      </Button>
      </>
  );

  return(
   
    <Grid  container justify="center" direction="row">
      
       {alineacion  ? 
          <>
          <Grid item xs={5} style={{marginLeft: matchesSm ? 0 : "3em", textAlign: matchesSm ? "center": undefined}}>
            { texto }
          </Grid>
          <Hidden smDown>
            <Grid  item style={{marginRight: matchesSm ? 0 : "7em", marginLeft:"4em", marginBottom:"3em"}}>
              {imagen}
            </Grid>
          </Hidden>
        </>
       : 
        <>
          <Hidden smDown>
            <Grid  item style={{marginRight: matchesSm ? 0 : "7em", marginBottom:"3em"}}>
              {imagen}
            </Grid>
          </Hidden>
          <Grid item xs={5} style={{marginLeft: matchesSm ? 0 : "7em", textAlign: matchesSm ? "center": undefined}}>
            { texto }
          </Grid>
        </>
      } 
    </Grid>
  )

}
