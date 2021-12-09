import React, {useState} from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Logo from '../../../util/images/logo.svg';


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme=>({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo:{
    height:"4em"
  },
  tabContainer:{
    marginLeft: "auto",
  },
  tabItem:{
    ...theme.typography.tab,
    fontSize:"1.2rem",
    marginLeft:"25px",
    textTransform:"none"
  }
}))

export default function Header(props){
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange=(e,newValue) => {
    setValue(newValue)
  }

  return(
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={Logo} alt="Logo Quirodiet" className={classes.logo}/>
            <Tabs 
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit" 
              value={value} 
              className={classes.tabContainer}
            >
              <Tab 
                className={classes.tabItem}
                component={Link} to ="/"
                label="Inicio"
              />
              <Tab 
                className={classes.tabItem}
                component={Link} to ="/servicios" 
                label="Servicios"/>
              <Tab 
                className={classes.tabItem}
                component={Link} to ="/contacto" 
                label="Contacto"/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </>
  )
}