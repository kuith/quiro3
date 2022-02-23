import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  precio: {
    fontWeight:"bold",
    paddingLeft:"0.5em"
  },
  margenAbajo:{
    marginBottom:"1em"
  }

}));

export default function PresoterapiaBlock({datos}) {
  const classes = useStyles();
  return(
    <Grid item>
      <Typography variant="h4" className={classes.margenAbajo}>
        Sus funciones son:
      </Typography>
      <Typography variant="body1" className={classes.margenAbajo}>
        <ul>
          <li>Activar la circulación eliminando toxinas, cansancio, pesadez y mejora las varices.</li>
        </ul>
        <ul>
          <li>Es muy recomendable para personas embarazadas o con problemas circulatorios.</li>
        </ul>
        <ul>
          <li>Ayuda a perder peso mediante el drenaje linfático que combinado con una buena dieta y algo de ejercicio podemos conseguir un resultado asombroso para nuestra figura.</li>
        </ul>
        <ul>
          <li>Reduce la celulitis y mejora la piel de naranja tonificando músculos y articulaciones siempre que se combine con ejercicio.</li>
        </ul>
        <ul>
          <li>Nos ayuda a la relajación de los músculos y a la fatiga muscular.</li>
        </ul>
        <ul>
          <li>Combate los problemas de estreñimiento, y si se aplica un masaje manual y con dieta el resultado es buenísimo.</li>
        </ul>
        <ul>
          <li>Hay que tomar un par de vasos de agua antes de darse una sesión.</li>
        </ul>
        <ul>
          <li>En la mayoría de las sesiones es ideal acompañarlas con dieta y hacer algo de ejercicio para unos resultados satisfactorios.</li>
        </ul>
        <ul>
          <li>No se recomienda a personas que tengan el período.</li>
        </ul>
        <ul>
          <li>Es muy probable que salga algún hematoma las primeras sesiones si no se está muy acostumbrado, depende de la persona, pero no es doloroso.</li>
        </ul>
      </Typography>
      <Typography variant="h4" className={classes.margenAbajo}>
        Tarifa:
      </Typography>
      <Typography variant="body1" className={classes.margenAbajo}>
        Sesión de presoterapia 30 min + masaje anticelulítico de 30 min: 
        <span className={classes.precio}> {datos.presoterapiaSesion} €</span> por sesión.
      </Typography>
    </Grid>
  )
}
