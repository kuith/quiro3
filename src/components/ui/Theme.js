import { createTheme } from '@mui/material/styles';

const arcGreen = '#00796b';

export default createTheme({
  palette:{
    common:{
      green: `${arcGreen}`
    },
    primary:{
      main: `${arcGreen}`
    }
  },
  typography:{
    fontFamily: ["Acme", "sans-serif"].join(','),
    fontSize:16
  }
});