import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  mainContainer:{
    marginTop:"2em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    }
  },
  margenAbajo:{
    marginBottom:"1em"
  }

}));

export default function Contacto({datos}) {
  const classes = useStyles();

  return(
    <Grid container direction='column' className={classes.mainContainer} alignItems="center">
      <Grid item className={classes.rowContainer}>
        <Typography variant="h2" className={classes.margenAbajo}>
          {datos.titulo}
        </Typography>
      </Grid>

      <Grid container direction='row'>
        <Grid item lg>
          Mapa
        </Grid> 
        <Grid item lg>
          Horario
        </Grid>
      </Grid>
      
      <Grid container direction='row'>
        <Grid item lg>
          Dirección
        </Grid> 
        <Grid item lg>
          Correo
        </Grid>
      </Grid>
    </Grid>
  );
}