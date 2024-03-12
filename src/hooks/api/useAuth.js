import { useState } from "react";

export const postAuth = async (body, options) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/1.0/auth`, {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    throw {
      statusText: response.statusText,
    };
  }

  const data = await response.json();

  return data;
};

export const usePostAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (body, options = {}) => {

    try {
      setIsLoading(true);
      const { token } = await postAuth(body, options);
      // TODO: handle token response
      setData(token);
      setIsLoading(false);
      return token;
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
    post,
  };
};
