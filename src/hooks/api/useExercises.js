import { useState, useEffect } from "react";
import { useAuthContext } from "../../store/authContext";

export const getExercises = async (options) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/1.0/exercises`, {
    ...options,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${options.token}`
    },
  });

  if (response.status !== 200) {
    throw {
      statusText: response.statusText,
    };
  }

  return await response.json()
};

export const useExercises = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({items: []});
  const authContext = useAuthContext();

  const get = async (options = {}, token) => {
    try {
      setIsLoading(true);
      const response = await getExercises({...options, token});
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  useEffect(() => {

    let active = true;

    async function doIt(token) {
      await get({}, token);
    }

    if (active && authContext.token && data.items.length === 0) {
      doIt(authContext.token);
    }

    return () => {
      active = false;
    }
  }, [authContext.token, data.items])

  return {
    isLoading,
    error,
    data,
    get,
  };
};
