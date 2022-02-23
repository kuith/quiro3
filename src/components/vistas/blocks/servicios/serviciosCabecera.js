import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
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

export default function ServiciosCabecera({datos}) {
  const classes = useStyles();

  return(
    <Grid item className={classes.rowContainer}>
      <Typography variant="h2">{datos.titulo}</Typography>
      <Typography variant="h5" className={classes.margenAbajo}>{datos.subtitulo1}</Typography>
    </Grid>
  );
}