import { createContext, useState } from "react";


export const AuthContext = createContext({
  isAuthed: false,
  token: null,
  updateToken: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [token, setToken] = useState(null);
  
  return {
    isAuthed,
    token,
    updateToken: (value) => {
      setToken(value);
      setIsAuthed(true);
    },
  };
};
