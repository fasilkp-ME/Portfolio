import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Slate/Professional Blue
      light: '#34495E',
      dark: '#1A252F',
    },
    secondary: {
      main: '#3498DB', // Soft Azure
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#2C3E50',
            '&:hover': {
              backgroundColor: '#1A252F',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #E9ECEF',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        },
      },
    },
  },
});

export default theme;
