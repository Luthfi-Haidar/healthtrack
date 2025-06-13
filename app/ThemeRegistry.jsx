'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});

export default function ThemeRegistry({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
