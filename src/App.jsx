import { ChakraProvider} from "@chakra-ui/react";
import theme from "./theme.js";
import Home from "./views/Home.jsx";
import Access from "./views/Access.jsx";
import { AuthContext, useAuthContext } from "./store/authContext.jsx";

function App() {
  const authContext = useAuthContext();

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <AuthContext.Provider value={authContext}>
        {!authContext.isAuthed && <Access />}
        {authContext.isAuthed && <Home />}
      </AuthContext.Provider>
    </ChakraProvider>
  );
}

export default App;
