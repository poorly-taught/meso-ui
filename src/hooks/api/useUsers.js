import { useState } from "react";

export const postUser = async (body, options) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/1.0/users`, {
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

};

export const usePostUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (body, options = {}) => {
    try {
      setIsLoading(true);
      await postUser(body, options);
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
    post,
  };
};
