import { useEffect, useState } from "react";

type Condition = boolean;

interface ApiResponse {
  data: {
    results: any[]; // Replace 'any[]' with the appropriate type of data you expect from the API response.
  };
}

interface ApiCallParams {
  url: string;
  condition: Condition;
}

const useApiCall = ({ url, condition }: ApiCallParams) => {
  const [data, setData] = useState<any[]>([]);
  const cachedData = useState<{ [key: string]: any[] }>({})[0];

  useEffect(() => {
    const fetchData = async () => {
      if (condition) {
        // Check if data for the current URL is already cached
        if (cachedData[url]) {
          setData(cachedData[url]); // Use cached data if available
        } else {
          const response = await fetch(url);
          const jsonData: ApiResponse = await response.json();
          setData(jsonData.data.results);

          // Update the cached data with the new data
          cachedData[url] = jsonData.data.results;
        }
      } else {
        // If condition is false, clear the cached data for the current URL
        setData([]);
        cachedData[url] = [];
      }
    };

    fetchData();
  }, [url, condition, cachedData]);

  return data;
};

export default useApiCall;
