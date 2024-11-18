import React from 'react';
import { AuthProvider } from '../state/auth/auth';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/themes';
import { GlobalStyle } from '../../globalStyles';
import { ThemeProvider, useTheme } from './ThemeContext';
import App from '../../App';

const ThemedApp = () => {
  
  const { darkMod } = useTheme();
  
  return (
    <StyledThemeProvider theme={darkMod ? darkTheme : lightTheme}>
    <AuthProvider>
    <GlobalStyle/>
    <App /> 
    </AuthProvider>
    </StyledThemeProvider>
  );
};

const ThemeWrapper = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
