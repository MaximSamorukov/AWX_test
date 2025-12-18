import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { grey } from '@mui/material/colors';
import App from './App.tsx';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[100],
    },
    color: {
      black: '#000000',
      grey: grey[400],
    },
    tabPanel: {
      backGround: {
        default: '#FFFFFF',
        active: '#000000',
      },
      text: {
        default: '#000000',
        active: '#FFFFFF',
      },
    },
  },
  typography: {
    fontFamily: "'SF Pro Text', sans-serif",
    body1: {
      fontSize: '16px',
    },
    weight: {
      bold: 900,
      standard: 400,
    },
    font1: {
      fontSize: '18px',
    },
    font2: {
      fontSize: '16px',
    },
    font3: {
      fontSize: '14px',
    },
  },
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
