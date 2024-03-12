import { useState } from "react";

export const postUser = async (body, options) => {
  const response = await fetch("/api/1.0/users", {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    throw {
      statusText: response.statusText
    };
  }

  const data = await response.json();

  return data;
};

export const usePostUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (body, options = {}) => {
    try {
      setIsLoading(true);
      const response = await postUser(body, options);
      setData(response);
      setIsLoading(false);
      return response;
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
