import React, {useState} from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

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
  //const mailtoForm = '$"mailto: {datos.correo}`";
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [nombre, setNombre] = useState("");
  //const [nombreHelper, setNombreHelper] = useState("");

  const [correo, setCorreo] = useState("");
  const [correoHelper, setCorreoHelper] = useState("");

  //const [telefono, setTelefono] = useState("");
  //const [telefonoHelper, setTelefonoHelper] = useState("");

  const [mensaje, setMensaje] = useState("");
  //const [mensajeHelper, setMensajeHelper] = useState("");

  const [open, setOpen] = useState(false)

  const onChange = event =>{
    let valid;

    switch(event.target.id) {
      case 'correo':
        setCorreo(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

        if(!valid){
          setCorreoHelper("Correo no válido")
        } else {
          setCorreoHelper("")
        }

        break;
      //case 'telefono':
        //setTelefono(event.target.value)
        //valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

        //if(!valid){
          //setTelefonoHelper("Teléfono no válido")
        //} else {
          //setTelefonoHelper("")
        //}

        //break;


       default: break;
    }
  }

  const escribanos = (
    <Grid item>
          <Typography variant="h3" style={{lineHeight:1}}>Escríbanos</Typography>
          <Typography 
            variant="body1"
            style={{color:theme.palette.common.green, marginBottom:"1em"}}
            >Le esperamos
          </Typography>
        </Grid>
  );

  const correoTelefono = (
    <Grid item>
      <Grid item container direction='row'>
        <Grid item>
          <PhoneIcon className={classes.icon}/>
        </Grid>
        <Grid item>
          <Typography 
            variant='body1'
            style={{color:theme.palette.common.green}}
          >
            <a href={`tel:${datos.telefono}`} style={{textDecoration: "none", color:"inherit"}}>{datos.telefono}</a>
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
            <a href={`mailto:${datos.correo}`}  style={{textDecoration: "none", color:"inherit"}}>{datos.correo}</a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )

  const textFieldsFormulario =  (
    <Grid item container direction='column' style={{maxWidth:"20em"}}>
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
          error={correoHelper.length !== 0}
          helperText={correoHelper}
          fullWidth
          value={correo}
          onChange={onChange}
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
          value={mensaje}
          rows={10}
        />
      </Grid>
    </Grid>
  )

  const botonFormulario = (
    <Grid item container
      justify='center' 
      style={{marginTop:"1.5em", marginBottom:"1.5em"}}
    >
      <Button
        disabled = {nombre.length === 0 || mensaje.length === 0 || correoHelper.length !== 0 || correo.length === 0}
        variant="contained"
        className={classes.botonEnvio}
        onClick = {()=>setOpen(true)}
      >
        Enviar Mensaje
      </Button>
    </Grid>
  )
  const formulario = (
    <>
    
    {textFieldsFormulario}
    {botonFormulario}
    
    </>
  )

  const dialogo =(
    <Dialog 
      style={{zIndex: 1302}}
      open={open}
      fullScreen={matchesXs}
      onClose={()=>setOpen(false)}
      PaperProps={{
        style: {
          paddingTop: matchesXs ? "1em": "5em",
          paddingBottom: matchesXs ? "1em": "5em",
          paddingLeft: matchesXs ? 0 : matchesSm ? "5em" : matchesMd ? "10em" : "20em",
          paddingRight: matchesXs ? 0 : matchesSm ? "5em" : matchesMd ? "10em" : "20em"
        }
      }}
    >
      <DialogContent>
        <Grid container direction='column'>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>Confirme mensaje</Typography>
          </Grid>
            {textFieldsFormulario}
        </Grid>
        <Grid item container style={{marginTop:"1em"}} alignItems="center">
          <Grid item>
            <Button color='primary' style={{fontWeight:300}} onClick={()=>setOpen(false)}>Cancelar</Button>
          </Grid>
          <Grid item>
            {botonFormulario}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )

  return(
    <>
      <Grid item container 
        direction='column' 
        alignItems='center' 
        lg 
        style={{marginTop: matchesMd ? "3em" : 0,}}
      > 
        {escribanos}
        {correoTelefono}
        
        {formulario}
        
        {/* **Bloque dialog ***/}
        {dialogo}
        {/* FIN Bloque dialog */}

      </Grid>
    </>

  );

}