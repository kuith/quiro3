import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerDecotarion from '../../../util/images/FooterDecoration.svg';

const useStyles = makeStyles(theme=>({
  footer:{
    backgroundColor: theme.palette.primary.main,
    width:"100%",
    zIndex:1302,
    position:"relative"
  },
  adorment:{
    width:"25em",
    verticalAlign:"bottom",
    [theme.breakpoints.down("md")]:{
      width:"21em"
    },
    [theme.breakpoints.down("xs")]:{
      width:"10em"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img alt="Decoración footer" src={footerDecotarion} className={classes.adorment} /> 
    </footer>
  );
}

