import React, {useState, useEffect} from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
    [theme.breakpoints.down("xs")]:{
      height:"4em"
    }
  },
  logo:{
    height:"4em",
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
    backgroundColor: theme.palette.secondary.main,
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

  const serviciosData = datosMenu.map(servicio=>(
    <MenuItem onClick={()=>{handleClose()}} 
      component={Link} to ={`/servicios/${servicio.link}`}  
      id={servicio.nombre}
      classes={{root: classes.menuItem}}
    >
      {servicio.nombre}
    </MenuItem>
  ));

  const listItemData = datosLista.map((item, index)=>(
    <ListItem 
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
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  )
  
}