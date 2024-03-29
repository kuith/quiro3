import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import theme from './ui/Theme';

import Header from './ui/containers/header';
import Footer from './ui/containers/Footer';

import BlocksContainer from '../components/vistas/blocks/blocksContainer';
//import LandingBlocks from './vistas/blocks/landing/landingBlocks';
import GServiciosBlocks from './vistas/blocks/general/gServiciosBlocks';
import ServiciosContainer from './vistas/blocks/servicios/ServiciosContariner';
import Landing from './ui/containers/landing';
//import LandingBlock from './vistas/blocks/landing/landingBlock';

//<Route exact path="/" element={<BlocksContainer blocks={<LandingBlocks datos={datosLanding}/>}/>} />

//bloques servicios
import QuiromasajeBlockDatos from './vistas/serviciosBlocks/quiromasajeBlock';
import OsteopatiaBlockDatos from './vistas/serviciosBlocks/osteopatiaBlock';
import PresoterapiaBlockDatos from './vistas/serviciosBlocks/presoterapiaBlock';
import DeportivoBlockDatos from './vistas/serviciosBlocks/deportivoBlock';
import DieteticoBlockDatos from './vistas/serviciosBlocks/dieteticoBlock';
import BonosBlockDatos from './vistas/serviciosBlocks/bonosBlock';
import FacialBlockDatos from './vistas/serviciosBlocks/facialBlock';
import TatooBlockDatos from './vistas/serviciosBlocks/tatooBlock';

//Contacto
import ContactoContainer from './vistas/blocks/contacto/contactoContainer';
import MapaContacto from './vistas/blocks/contacto/mapaContacto';
//import DireccionContacto from './vistas/blocks/contacto/direccionContacto';
import HorarioContacto from './vistas/blocks/contacto/horarioContacto';
import CorreoContacto from './vistas/blocks/contacto/correoContacto';

//Instalaciones
import Instalaciones from './vistas/instalaciones/instalaciones';


import {menuServicios} from '../util/datos/datos';
import {listaDrawer} from '../util/datos/datos';


import * as datosLanding from '../util/datos/datosLanding';
import * as datosGeneralServicios from '../util/datos/datosGeneralServicios';
import * as datosServicios from '../util/datos/datosServicios';
import {contacto} from '../util/datos/datosContacto';
import {imagenesInstalaciones} from '../util/datos/datosInstalaciones';

//Variables datos
const datosServiciosQuiromasaje = datosServicios.quiromasaje;
const datosServiciosOsteopatia = datosServicios.osteopatia;
const datosServiciosPresoterapia = datosServicios.presoterapia;
const datosServiciosDeportivo = datosServicios.deportivo;
const datosServiciosDietetico = datosServicios.dietetico;
const datosServiciosBonos = datosServicios.bonos;
const datosServiciosFacial = datosServicios.facial;
const datosServiciosTatoo = datosServicios.tatoo;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
        <Header datMenu={menuServicios} listaDrawer={listaDrawer}/>
        <Routes>
          <Route exact path="/" element={<Landing datos={datosLanding} />} />
          <Route exact path="/quiro" element={<Landing datos={datosLanding} />} />
          <Route exact path="/servicios/serviciosGeneral" 
            element={<BlocksContainer 
              blocks={<GServiciosBlocks 
              datos={datosGeneralServicios}
              />}/>} />
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
          <Route exact path="/servicios/deportivo" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosDeportivo} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<DeportivoBlockDatos datos={datosServiciosDeportivo}/>}
                />}
              />}  
          />
          <Route exact path="/servicios/dietetico" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosDietetico} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<DieteticoBlockDatos datos={datosServiciosDietetico}/>}
                />}
              />}  
          />
          <Route exact path="/servicios/bonos" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosBonos} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<BonosBlockDatos datos={datosServiciosBonos}/>}
                />}
              />}  
          />
          <Route exact path="/servicios/facial" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosFacial} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<FacialBlockDatos datos={datosServiciosFacial}/>}
                />}
              />}  
          />
          <Route exact path="/servicios/tatoo" 
            element={<BlocksContainer 
                blocks={<ServiciosContainer 
                  datos={datosServiciosTatoo} 
                  blockServicio={ServiciosContainer} 
                  blockDatos = {<TatooBlockDatos datos={datosServiciosTatoo}/>}
                />}
              />}  
          />
          <Route exact path="/contacto" 
            element={<ContactoContainer
              datos= {contacto}
              blockMapa={<MapaContacto datos={contacto}/>}
              //blockDireccion={<DireccionContacto datos={contacto}/>}
              blockHorario = {<HorarioContacto datos={contacto}/>}
              blockCorreo = {<CorreoContacto datos = {contacto}/>}
            />}
          />
          <Route exact path="/instalaciones" 
            element={<Instalaciones
              datos= {imagenesInstalaciones}
            />}
          />
       

        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
