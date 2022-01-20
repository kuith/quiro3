import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
   
}));

export default function Inicio(props) {
  const classes = useStyles();
  const theme = useTheme();

  

  return(
    <Grid container direction="column">
      <Grid item>{/*---Bloque servicios---*/}
        <Grid container justify='flex-end' alignItems='center' direction="row">
          <Grid item>
            <Typography align='center' variant="h2">Fisioterapia y otros servicios</Typography>
            <Typography variant="subtitle1">Descubra todos los servicios que le ofrecemos</Typography>
            <Button variant="outlined">
              <span style={{marginRight: 10}}>Más información</span>
            </Button>

          </Grid>
          <Grid item>
            <img src={props.logo} alt="Logo principal"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}