import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import Home from "./views/Home.jsx";
import Access from "./views/Access.jsx";


function App() {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Access />
      <Home /> 
    </ChakraProvider>
  );
}

export default App;
