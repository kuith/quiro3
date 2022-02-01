import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  icon: {
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  linkButton:{
    ...theme.typography.linkButton,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    },
    marginTop:"1em"
  },
  espacing: {
    marginTop:"1em"
  },

}));

export default function GServiciosBlock({datos, blockAlign}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  let alineacion = "undefined";
  let margen = "marginLeft";

  if( blockAlign === "right") {
    alineacion = "flex-end";
    margen = "marginRight";
  }

  console.log(margen);
 

  return(
    <Grid item>
        <Grid container justify= {matchesSm ? "center": alineacion} direction="row" className={classes.espacing}>
          <Grid md={7} item style={{marginLeft: matchesSm ? 0 : "7em", textAlign: matchesSm ? "center": undefined}}>
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
          <Grid item style={{marginRight: matchesSm ? 0 : "7em"}}>
            <img className={classes.icon} src={datos.imagen} alt="Imagen"/>
          </Grid>
        </Grid>
      </Grid>
  )

}

/* imagen: {},
  titulo: "Quiromasaje",
  precio: "22",
  aclaracion: "(Con bono de 10)",
  texto: "Método de exploración (mediante la palpación) y de tratamiento manual, aplicado sobre la cubierta corporal.",
  servicio: "quiromasaje",
  link:"" */