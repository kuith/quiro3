import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import footerDecotarion from '../../../util/images/FooterDecoration.svg';

const useStyles = makeStyles(theme=>({
  footer:{
    backgroundColor: theme.palette.primary.main,
    width:"100%",
    //zIndex:1302,
    position:"relative"
  },
  adorno:{
    width:"25em",
    verticalAlign:"bottom",
    [theme.breakpoints.down("md")]:{
      width:"21em"
    },
    [theme.breakpoints.down("xs")]:{
      width:"10em"
    }
  },
  mainContainer:{
    position:"absolute",
  },
  link:{
    color:"white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem:{
    margin:"3em"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Inicio
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to="/servicios/serviciosGeneral" className={classes.link}>
                Servicios
              </Grid>
              <Grid item component={Link} to="/servicios/quiromasaje" className={classes.link}>
                Quiromasaje
              </Grid>
              <Grid item component={Link} to="/servicios/presoterapia" className={classes.link}>
                Presoterapia
              </Grid>
              <Grid item component={Link} to="/servicios/osteopatia" className={classes.link}>
                Osteopatía
              </Grid>
              <Grid item component={Link} to="/servicios/bonos" className={classes.link}>
                Bonos
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to="/servicios/dietetico" className={classes.link}>
                Asesoramiento Dietético
              </Grid>
              <Grid item component={Link} to="/servicios/deportivo" className={classes.link}>
                Asesoramiento Deportivo
              </Grid>
              <Grid item component={Link} to="/servicios/facial" className={classes.link}>
                Rejuvenecimiento Facial Laser
              </Grid>
              <Grid item component={Link} to="/servicios/tatoo" className={classes.link}>
                Sesión eliminación Tatuajes
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to="/servicios/contacto" className={classes.link}>
                Contacto
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item component={Link} to="/instalaciones" className={classes.link}>
                Instalaciones
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Hidden>
      <img alt="Decoración footer" src={footerDecotarion} className={classes.adorno} /> 
    </footer>
  );
}

