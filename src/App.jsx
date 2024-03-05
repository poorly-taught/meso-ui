import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import AccessGate from './views/AccessGate.jsx';

function App() {

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
     <AccessGate/>
    </ChakraProvider>
  )
}

export default App
