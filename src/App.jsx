import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import AccessGate from './views/AccessGate.jsx';
// import Home from './views/Home.jsx'

function App() {

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <AccessGate/>
      {/* <Home/> */}
    </ChakraProvider>
  )
}

export default App
