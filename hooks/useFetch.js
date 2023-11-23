import { useState, useEffect } from "react";
import axios from "axios";

// import { RAPID_API_KEY } from "@env";
import { Alert } from "react-native";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    params: {
      query: { ...query },
    },
    headers: {
      "X-RapidAPI-Key": "16bfa04cc8msh97dee6fd77012e0p1d05cdjsn1e41d6b24c2d",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      Alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData;
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;