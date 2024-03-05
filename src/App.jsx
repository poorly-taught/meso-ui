import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
// import Home from './views/Home.jsx'
// import AccessGate from './views/AccessGate.jsx';

function App() {

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      {/* <AccessGate/> */}
      {/* <Home/> */}
    </ChakraProvider>
  )
}

export default App
