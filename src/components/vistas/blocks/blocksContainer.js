import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme=>({
   mainContainer:{
     marginTop:"2em"
   },   
}));

export default function BlockContainer({blocks}) {
  const classes = useStyles();
 

  return(
    <Grid container direction="column" className={classes.mainContainer}>
      {blocks}
    </Grid>
  )
}