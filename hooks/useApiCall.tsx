import { useEffect, useState } from "react";

export function useApiCall(url: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUrl();
  }, [url]);

  return data;
}
