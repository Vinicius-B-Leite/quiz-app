import { ThemeProvider } from 'styled-components'
import Routes from './src/routes';
import { darkMode } from './src/theme/darkMode';

export default function App() {
  return (

    <ThemeProvider theme={darkMode}>
      <Routes />
    </ThemeProvider>
  );
}
