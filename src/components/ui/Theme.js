import { createTheme } from '@mui/material/styles';
//import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';

const quiroGreen = '#04bba6';
const quiroDarkGreen = '##cddc39'

const theme = createTheme({
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

export default theme;