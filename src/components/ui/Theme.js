//import { createTheme } from '@mui/material/styles';
import { createMuiTheme} from '@material-ui/core/styles';

const quiroGreen = '#04bba6';
const quiroDarkGreen = '##cddc39'

const theme = createMuiTheme({
  
  palette:{
    common:{
      green: `${quiroGreen}`
    },
    primary:{
      main: `${quiroGreen}`
    },
    secondary:{
      main: `${quiroDarkGreen}`
    },
    status: {
      danger: '#e53e3e',
    },
  },
  typography:{
    fontFamily: ["Acme", "sans-serif"].join(','),
    fontSize:16
  }
});

export default theme;