import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  precio: {
    fontWeight:"bold"
  },
  margenAbajo:{
    marginBottom:"1em"
  }

}));

export default function OsteopatiaBlock({datos}) {
  const classes = useStyles();

  return(
    <Grid item>
      <Typography variant="h4" className={classes.margenAbajo}>
        ¿QUÉ ES? Y ¿QUÉ BENEFICIOS TIENE?
      </Typography>
      <Typography variant="body1" paragraph>
        La medicina osteopática se encuentra enclavada dentro del amplio abanico de las disciplinas fisioterapéuticas, consistente en un conjunto de técnicas manuales y tratamientos no invasivos como alternativa a los problemas y dolencias de la salud, evitando la aplicación de métodos farmacológicos para su tratamiento.
      </Typography>
      <Typography variant="body1" paragraph>
        La osteopatía es una disciplina cuya máxima reside en la visión holística del cuerpo humano, entendiendo este como una unidad, y no como un conjunto independiente de órganos y estructuras. Partiendo de esta premisa, los tratamientos osteopáticos se encaminan al alivio de la dolencia a través de la recuperación del equilibrio orgánico general, más que el alivio analítico del foco del dolor.
      </Typography>
      <Typography variant="body1" paragraph>
        A este concepto se suma la aplicación de la homeostasis, es decir, la propiedad de los organismos vivos para mantener una condición estable compensando los intercambios internos y externos (metabolismo), como por ejemplo la autorregulación de la temperatura o de los niveles corporales de pH.
      </Typography>
      <Typography variant="body1" paragraph>
        Con estos antecedentes, encontramos en la osteopatía un instrumento dedicado a preservar todas las funciones orgánicas en su perfecta actividad (sistema cardiovascular, respiratorio, nervioso, linfático, músculo esquelético…).
      </Typography>

      <Typography variant="h6" className={classes.margenAbajo}>{datos.subtextoImagen1}</Typography>
      <Typography variant="h6" className={classes.margenAbajo}>{datos.subtextoImagen2}</Typography>
    </Grid>
  )
}