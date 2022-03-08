import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

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
    <Grid item style={{marginRight: matchesSm ? 0 : "7em"}}>
      <img className={classes.icon} src={datos.imagen} alt="Imagen"/>
    </Grid>
  )

  const texto = (  
   <Grid lg={6} item style={{marginLeft: matchesSm ? 0 : "7em", textAlign: matchesSm ? "center": undefined}}>
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
    </Grid>
  )

  console.log("Me llega por parametro la alineacion: " + alineacion);
  
   
  const textoIz = (
    <>
      { texto },
      {imagen}
    </>
  );

  const textoDer = (
    <>
      { imagen },
      {texto}
    </>
  );

  function colocar() {
    console.log("Dentro alineacion: " + alineacion);
    if (alineacion === "left") {
      return {textoIz}
    } else {
      return {textoDer}
    }
  }
  // {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
  return(
   
    <Grid container justify="center" direction="row">
      
      {alineacion  ? {textoIz}: {textoDer}}
        
    </Grid>
    
  )

}
