import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import Access from './views/Access.jsx';
// import Home from './views/Home.jsx'

function App() {

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Access/>
      {/* <Home/> */}
    </ChakraProvider>
  )
}

export default App
