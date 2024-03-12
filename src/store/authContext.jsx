import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isAuthed: false,
  token: null,
  updateToken: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("meso.token"));
    if (!token) {
      setIsAuthed(false);
    }

    if (token) {
      setToken(token);
      setIsAuthed(true);
    }
  }, []);

  const updateToken = (value) => {
    setToken(value);
    setIsAuthed(true);
    localStorage.setItem('meso.token', JSON.stringify(value))
  };

  return {
    isAuthed,
    token,
    updateToken,
  };
};
