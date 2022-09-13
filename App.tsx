import { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { TemaContext, TemaProvider } from './src/context/TemaContext';
import Routes from './src/routes';
import { darkMode } from './src/theme/darkMode';
import { lighMode } from './src/theme/lightMode';

export default function App() {
  const { tema } = useContext(TemaContext)
  console.log(tema)

  return (
    <ThemeProvider theme={tema === 'lightMode' ? lighMode : darkMode}>
      <TemaProvider>
        <Routes />
      </TemaProvider>
    </ThemeProvider>
  );
}
