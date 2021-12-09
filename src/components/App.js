import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme';

import Header from './ui/containers/header';
import Inicio from '../components/vistas/inicio';
import Servicios from '../components/vistas/servicios';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
        <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/servicios" element={<Servicios />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
