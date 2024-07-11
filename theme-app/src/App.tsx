// src/App.tsx
import React, { useContext } from 'react';
import './App.css';
import NameInput from './component/NameInput';
import { ThemeChg, ThemeProvider as CustomThemeProvider } from './component/ThemeChg';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeChg);

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <header>
          <button onClick={toggleTheme}>
            Toggle Theme
          </button>
          <NameInput />
        </header>
      </Container>
    </StyledThemeProvider>
  );
}

export default App;
