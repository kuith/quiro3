import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
  mainContainer:{
    marginTop:"3em"
  },
  correoContainer:{
    marginTop:"4em"
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

export default function ContactoContainer({datos, blockMapa, blockHorario, blockCorreo}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  //const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matchesMd);

  const titulo = (
    <Grid item className={classes.rowContainer}>
        <Typography variant="h2" className={classes.margenAbajo}>
          {datos.titulo}
        </Typography>
      </Grid>
  );

  const mapa = (
    <Grid item>
      <Grid item container alignItems="center" className={classes.rowContainer}>
        {blockMapa}
      </Grid>
    </Grid>
  )

  const tituloMapa = (
    <Grid item>
      {titulo}
      {mapa}
    </Grid>
  )

  const horarioCorreo = (
    <Grid item>
      <Grid container direction='row' justify='center'  className={classes.correoContainer}  lg>
          {blockHorario}

          {blockCorreo}

      </Grid>
    </Grid>
  )

  const total = (
    <Grid container direction="column" className={classes.mainContainer}>
     
      {tituloMapa}

      {horarioCorreo}

    </Grid>
  )

  return(
    <>
    {total}
    </>
  );
}