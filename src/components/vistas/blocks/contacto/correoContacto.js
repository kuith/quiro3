import React, {useState} from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme=>({
  precio: {
    fontWeight:"bold",
    paddingLeft:"0.5em"
  },
  margenAbajo:{
    marginBottom:"1em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    }
  },
  icon:{
    marginRight:"0.5em",
    verticalAlign:"bottom"
  },
  mensaje: {
    border: `2px solid ${theme.palette.common.green}`,
    marginTop: "4em",
    borderRadius:5
  },
  botonEnvio: {
    borderRadius: 30,
    height: 45,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.darkGreen,
    color: "white",
    "&:hover": {
      backgroundColor:theme.palette.secondary.light
    }
  }
}));

export default function CorreoContacto({datos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  return(
    <>
    <Grid item>
      <Grid container direction='column'>
        <Grid item>
          <Typography variant="h3" style={{lineHeight:1}}>Escríbanos</Typography>
          <Typography 
            variant="body1"
            style={{color:theme.palette.common.green, marginBottom:"1em"}}
            >Le esperamos
          </Typography>
        </Grid>

        <Grid item container>
          <Grid item>
            <PhoneIcon className={classes.icon}/>
          </Grid>
          <Grid item>
            <Typography 
              variant='body1'
              style={{color:theme.palette.common.green}}
            >
              {datos.telefono}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container style={{marginBottom:"1.5em"}}>
          <Grid item>
            <EmailIcon className={classes.icon}/>
          </Grid>
          <Grid item>
            <Typography 
              variant='body1'
              style={{color:theme.palette.common.green}}
            >
              {datos.correo}
            </Typography>
          </Grid>
        </Grid>

        <Grid item container direction='column' alignContent='center' style={{maxWidth:"25em"}}>
          <Grid item>
            <TextField
              label="Nombre" 
              id="nombre"
              fullWidth
              value={nombre} 
              onChange={(event) => setNombre(event.target.value)} 
            />
          </Grid>
          <Grid item>
            <TextField
              label="Correo electrónico"
              id="correo"
              fullWidth
              value={correo}
              onChange={(event) => setCorreo(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Teléfono"
              id="telefono"
              fullWidth
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
            />
          </Grid>
        
          <Grid item style={{maxWidth:"25em"}}>
            <TextField
              InputProps={{disableUnderline: true}}
              id="mensaje"
              className={classes.mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              multiline
              fullWidth
              rows={10}
            />
          </Grid>
        </Grid>

        <Grid item container justify='center' style={{marginTop:"1.5em"}}>
          <Button
            variant="contained"
            className={classes.botonEnvio}
          >
            Enviar Mensaje
          </Button>
        </Grid>
      </Grid>
    </Grid>
    </>

  );

}