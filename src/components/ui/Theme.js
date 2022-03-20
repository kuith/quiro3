import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const quiroGreen = '#26a69a';
const darkGreen = '#00695c';


export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      green: quiroGreen,
      darkGreen: darkGreen
    },
    primary: {
      main: quiroGreen,
      green: quiroGreen
    },
    secondary: {
      main: darkGreen
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem"
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: quiroGreen,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      color: quiroGreen
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: quiroGreen,
      
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: quiroGreen,
      fontWeight: 600
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: quiroGreen
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey
    },
    linkButton: {
      borderColor: quiroGreen,
      borderWidth: 2,
      textTransform: "none",
      color: quiroGreen,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: quiroGreen,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: darkGreen,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${quiroGreen}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${quiroGreen}`
        }
      }
    }
  }
});