import { createTheme } from '@mui/material/styles';

const quiroGreen = '#04bba6';
const quiroDarkGreen = '#03443d'

export default createTheme({
  palette:{
    common:{
      green: `${quiroGreen}`
    },
    primary:{
      main: `${quiroGreen}`
    },
    secondary:{
      main: `${quiroDarkGreen}`
    }
  },
  typography:{
    fontFamily: ["Acme", "sans-serif"].join(','),
    fontSize:16
  }
});