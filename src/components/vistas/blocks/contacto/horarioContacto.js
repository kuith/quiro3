import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  destacado: {
    fontWeight:"bold",
    paddingLeft:"0.5em"
  },
  margenAbajo:{
    marginBottom:"2em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
    marginBottom:"1.5em"
  },
}));

export default function HorarioContacto({datos}) {
  const classes = useStyles();
  return(
    
    <Grid item>
      <Typography variant="h3"  className={classes.rowContainer} style={{textAlign:"center"}}>
        {datos.horario}
      </Typography>
      <Typography variant="body1" className={classes.rowContainer}>
        {datos.horarioSemana}
      </Typography>
      <Typography variant="body1" className={classes.rowContainer}>
        {datos.horarioSabado}
      </Typography>
      <Typography variant="body1" className={classes.rowContainer}>
        {datos.aviso}
      </Typography>
      <Typography variant="body1" className={classes.rowContainer}>
        {datos.pedir}
      </Typography>
      <Typography variant="body1" className={classes.rowContainer}>
        {datos.parking}
      </Typography>
    </Grid>
  );
}