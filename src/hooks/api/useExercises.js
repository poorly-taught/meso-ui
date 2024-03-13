import { useState } from "react";

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

export const useExercises = (token) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({items: []});

  const get = async (options = {}) => {
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

  return {
    isLoading,
    error,
    data,
    get,
  };
};
