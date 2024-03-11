import { useState } from "react";

export const postUser = async (body, options) => {
  const response = await fetch("", {
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export const usePostUser = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (body, options = {}) => {
    try {
      setisLoading(true);
      const response = await postUser(body, options);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
      setisLoading(false);
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
