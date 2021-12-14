import React from 'react';
//import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import theme from './ui/Theme';

import Header from './ui/containers/header';
import Inicio from '../components/vistas/inicio';
import ServiciosGeneral from '../components/vistas/serviciosGeneral';

import {menuServicios} from '../util/datos/datosServicios';
import Bonos from '../components/vistas/servicios/bonos';
import Deportivo from '../components/vistas/servicios/deportivo';
import Dietetico from '../components/vistas/servicios/dietetico';
import Facial from '../components/vistas/servicios/facial';
import Osteopatia from '../components/vistas/servicios/osteopatia';
import Presoterapia from '../components/vistas/servicios/presoterapia';
import Quiromasaje from '../components/vistas/servicios/quiromasaje';
import Tatoo from '../components/vistas/servicios/tatoo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
        <Header datos={menuServicios}/>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/servicios/serviciosGeneral" element={<ServiciosGeneral />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
