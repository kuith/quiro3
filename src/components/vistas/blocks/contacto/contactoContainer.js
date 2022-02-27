import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';


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

export default function ContactoContainer({datos, blockMapa, blockDireccion, blockHorario, blockCorreo}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matchesMd);

  return(
    <>
    <Grid container direction="column" className={classes.mainContainer}>

      <Grid item className={classes.rowContainer}>
        <Typography variant="h2" className={classes.margenAbajo}>
          {datos.titulo}
        </Typography>
      </Grid>
      <Grid item>
        <Grid item container alignItems="center" direction ={matchesMd ? "column": "row"} className={classes.rowContainer}>
          {blockMapa}
          <Grid item direction="column" lg>
            {blockDireccion}
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid item container direction='row'  className={classes.mainContainer}  lg>
          <Grid item lg>
            {blockHorario}
          </Grid> 
          <Grid item container direction='column' justify='center'  lg>
            {blockCorreo}
          </Grid>
        </Grid>
      </Grid>

    </Grid>
      </>
  );
}