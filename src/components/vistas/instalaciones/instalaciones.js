import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '3em 3em 4em 3em' 
  }, 
  gridList: {
    width: '100%',
    height: 'auto'
  },
  
  imagen:{
    width:'100%'
  }
}));

export default function Instalaciones({datos}) {
  const classes = useStyles();

  const itemData = datos

  return (
    <div className={classes.root}>
      <GridList rowHeight={160} className={classes.gridList} cols={3}>
        {itemData.map((item) => (
          <GridListTile key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}