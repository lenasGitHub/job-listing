import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#0026af',
        },
        grey: {
          500: '#f4f4f4',
        },
        action:{
          active: '#f9e780'
        },
        background: {
          default: "#e4f0e2"
        }
    },
    typography: {
      button: {
        textTransform: 'none',
      }
    }
});

export default theme;