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

export default function DireccionContacto({datos}) {
  const classes = useStyles();
  return(
    <Grid item>
       <Typography variant="body1" className={classes.rowContainer}>
        {datos.calle}
      </Typography>
      <Typography variant="body1" className={classes.rowContainer}>
        {datos.ciudad}
      </Typography>
    </Grid>
  )
}