import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
//import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import theme from './ui/Theme';

import Header from './ui/containers/header';
import Footer from './ui/containers/Footer';

//import ServiciosGeneral from '../components/vistas/serviciosGeneral';

import BlocksContainer from '../components/vistas/blocks/blocksContainer';
import LandingBlocks from './vistas/blocks/landing/landingBlocks';
import GServiciosBlocks from './vistas/blocks/general/gServiciosBlocks';
import QuiromasajeBlock from './vistas/blocks/servicios/quiromasajeBlock';

import {menuServicios} from '../util/datos/datos';
import {listaDrawer} from '../util/datos/datos';
import Bonos from '../components/vistas/servicios/bonos';
import Deportivo from '../components/vistas/servicios/deportivo';
import Dietetico from '../components/vistas/servicios/dietetico';
import Facial from '../components/vistas/servicios/facial';
import Osteopatia from '../components/vistas/servicios/osteopatia';
import Presoterapia from '../components/vistas/servicios/presoterapia';
import Tatoo from '../components/vistas/servicios/tatoo';

//import {landigServicios, contactoLanding, instalacionesLanding} from '../util/datos/datosLanding';
import * as datosLanding from '../util/datos/datosLanding';
import * as datosGeneralServicios from '../util/datos/datosGeneralServicios';
import * as datosServicios from '../util/datos/datosServicios';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
        <Header datMenu={menuServicios} listaDrawer={listaDrawer}/>
        <Routes>
          <Route exact path="/" element={<BlocksContainer blocks={<LandingBlocks datos={datosLanding}/>}/>} />
          <Route exact path="/servicios/serviciosGeneral" element={<BlocksContainer blocks={<GServiciosBlocks datos={datosGeneralServicios}/>}/>} />
          <Route exact path="/servicios/quiromasaje" element={<BlocksContainer blocks={<QuiromasajeBlock datos={datosServicios.quiromasaje}/>}/>}  />
          <Route exact path="/servicios/deportivo" element={<Deportivo />} />
          <Route exact path="/servicios/dietetico" element={<Dietetico />} />
          <Route exact path="/servicios/facial" element={<Facial />} />
          <Route exact path="/servicios/osteopatia" element={<Osteopatia />} />
          <Route exact path="/servicios/presoterapia" element={<Presoterapia />} />
          <Route exact path="/servicios/bonos" element={<Bonos />} />
          <Route exact path="/servicios/tatoo" element={<Tatoo />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
