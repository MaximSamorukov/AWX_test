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
