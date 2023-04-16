import { ThemeProvider } from 'styled-components';
import { useChangeTheme } from './hooks/useChangeTheme';
import GlobalStyle from './styles/GlobalStyle';
import { Home } from './pages/Home';

function App() {
  const { theme, handleTheme } = useChangeTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home handleTheme={handleTheme} />
    </ThemeProvider>
  );
}

export default App;
