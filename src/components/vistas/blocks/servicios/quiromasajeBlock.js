import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
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

export default function QuiromasajeBlock({datos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return(
    <Grid item>
        <Grid container justify= {matchesSm ? "center": "flex-end"} direction="row" className={classes.espacing}>
          <Grid item style={{marginRight: matchesSm ? 0 : "7em"}}>
              <img className={classes.icon} src={datos.imagen} alt="Imagen quiromasaje"/>
              <Typography  variant="subtitle1">
                {datos.textoImagen}
              </Typography>
              <Typography  variant="subtitle1">
                {datos.subtextoImagen1}
              </Typography>
            </Grid>

          <Grid item style={{marginLeft: matchesSm ? 0 : "7em", textAlign: matchesSm ? "center": undefined}}>
            <Typography  variant="h2">
              {datos.titulo}
            </Typography>
            <Typography  variant="subtitle1">
              {datos.subtitulo1}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
  )

}