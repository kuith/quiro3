import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme';

import Header from './ui/containers/header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hola
      </ThemeProvider>
  );
}

export default App;
