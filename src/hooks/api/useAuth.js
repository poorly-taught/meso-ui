import { useState } from "react";

export const postAuth = async (body, options) => {
  const response = await fetch("/api/1.0/auth", {
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
      const response = await postAuth(body, options);
      // TODO: handle token response
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }

    return data;
  };
  return {
    isLoading,
    error,
    data,
    post,
  };
};
