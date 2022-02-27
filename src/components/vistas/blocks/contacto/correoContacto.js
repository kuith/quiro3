import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

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
}));

export default function CorreoContacto({datos}) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  return(
    <>
      <Grid item>
        <Typography variant="h3" style={{lineHeight:1}}>Escríbanos</Typography>
        <Typography 
          variant="body1"
          style={{color:theme.palette.common.green}}
          >Le esperamos
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item>
          <img src={PhoneOutlinedIcon} alt="Teléfono"/>
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
    </>

  );

}