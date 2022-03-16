import React, {useState, useEffect} from 'react';
import { StylesProvider  } from '@material-ui/styles';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
//import { makeStyles } from '@mui/styles';
//import AppBar from '@mui/material/AppBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemButton from '@material-ui/core/ListItemButton';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
    marginBottom: 0,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em"
    },

  },
  logo: {
    height: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "3em"
    },
  },
  tabContainer:{
    marginLeft: "auto",
  },
  tabItem:{
    ...theme.typography.tab,
    fontSize:"1.2rem",
    marginLeft:"25px",
    marginRight:"50px",
    textTransform:"none"
  },
  menu:{
    backgroundColor: theme.palette.primary.main
  },
  menuItem:{
    ...theme.typography.tab,
    opacity:0.7,
    "&:hover":{
      opacity:1
    }
  },
  drawerIcon:{
    height:"50px",
    width:"50px",
  },
  drawerIconContainer:{
    marginLeft: "auto",
  },
  drawer:{
    backgroundColor:theme.palette.primary.main,
  },
  drawerItem:{
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemSelected: {
    opacity: 1,
  }
}))

export default function Header({datMenu, listaDrawer}){
  
  const datosMenu = datMenu;
  const datosLista = listaDrawer;
  const classes = useStyles();
  const theme = useTheme();
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);



  const handleChange=(e,newValue) => {
    setValue(newValue)
  }

  const handleClick = (e)=> {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const serviciosData = datosMenu.map((servicio,i)=>(
    <MenuItem onClick={()=>{handleClose()}} 
      key={`${servicio}${i}`}
      component={Link} to ={`/servicios/${servicio.link}`}  
      id={servicio.nombre}
      classes={{root: classes.menuItem}}
    >
      {servicio.nombre}
    </MenuItem>
  ));

  const listItemData = datosLista.map((item, index)=>(
    <ListItem 
      key={`${item}${index}`}
      button component={Link} to={`${item.link}`}
      onClick={()=>setOpenDrawer(false)}
    >
      <ListItemText 
        classes={value === index ? [classes.drawerItem, classes.drawerItemSelected] : 
        classes.drawerItem}  
        disableTypography
      >
        {item.nombre}
      </ListItemText>
    </ListItem>
  ));

  const tabs = (
    <>
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
          aria-owns={anchorEl ? 'services-menu': undefined}
          aria-haspopup={anchorEl ? true : undefined}   
          component={Link} to ="/servicios/serviciosGeneral" 
          onMouseOver={event=>handleClick(event)}
          label="Servicios"/>
        <Tab 
          className={classes.tabItem}
          component={Link} to ="/contacto" 
          label="Contacto"/>
        <Tab 
          className={classes.tabItem}
          component={Link} to ="/instalaciones" 
          label="Instalaciones"/>
      </Tabs>
      <Menu id="services-menu" 
        anchorEl={anchorEl} 
        open={openMenu} 
        onClose={handleClose}
        classes={{paper:classes.menu}}
        MenuListProps={{onMouseLeave:handleClose}}
      >
        {serviciosData}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper:classes.drawer}}
      >
        <List disablePadding>
          {listItemData}
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </>
  );
  
  return(
    <StylesProvider  injectFirst>
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={Logo} alt="Logo Quirodiet" className={classes.logo}/>
            {matches ? drawer:tabs}           
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </>
    </StylesProvider >
  )
  
}