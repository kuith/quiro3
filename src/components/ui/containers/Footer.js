import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  footer:{
    backgroundColor: theme.palette.primary.main,
    width:"100%"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return <footer className={classes.footer}>ejemplo de Footer</footer>
}

