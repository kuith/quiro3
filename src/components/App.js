import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import theme from './ui/Theme';

import Header from './ui/containers/header';
import Footer from './ui/containers/Footer';

import BlocksContainer from '../components/vistas/blocks/blocksContainer';
import LandingBlocks from './vistas/blocks/landing/landingBlocks';
import GServiciosBlocks from './vistas/blocks/general/gServiciosBlocks';
import ServiciosContainer from './vistas/blocks/servicios/ServiciosContariner';

//bloques servicios
import QuiromasajeBlockDatos from './vistas/serviciosBlocks/quiromasajeBlock';
import OsteopatiaBlockDatos from './vistas/serviciosBlocks/osteopatiaBlock';
import PresoterapiaBlockDatos from './vistas/serviciosBlocks/presoterapiaBlock';

import {menuServicios} from '../util/datos/datos';
import {listaDrawer} from '../util/datos/datos';


//import {landigServicios, contactoLanding, instalacionesLanding} from '../util/datos/datosLanding';
import * as datosLanding from '../util/datos/datosLanding';
import * as datosGeneralServicios from '../util/datos/datosGeneralServicios';
import * as datosServicios from '../util/datos/datosServicios';

//Variables datos
const datosServiciosQuiromasaje = datosServicios.quiromasaje;
const datosServiciosOsteopatia = datosServicios.osteopatia;
const datosServiciosPresoterapia = datosServicios.presoterapia;



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
        <Header datMenu={menuServicios} listaDrawer={listaDrawer}/>
        <Routes>
          <Route exact path="/" element={<BlocksContainer blocks={<LandingBlocks datos={datosLanding}/>}/>} />
          <Route exact path="/servicios/serviciosGeneral" element={<BlocksContainer blocks={<GServiciosBlocks datos={datosGeneralServicios}/>}/>} />
          <Route exact path="/servicios/quiromasaje" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosQuiromasaje} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<QuiromasajeBlockDatos datos={datosServiciosQuiromasaje}/>}
                />}
              />}  
          />
          <Route exact path="/servicios/osteopatia" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosOsteopatia} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<OsteopatiaBlockDatos datos={datosServiciosOsteopatia}/>}
                />}
              />}  
          />
          <Route exact path="/servicios/presoterapia" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosPresoterapia} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<PresoterapiaBlockDatos datos={datosServiciosPresoterapia}/>}
                />}
              />}  
          />
       

        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
