import { useEffect, useState } from "react";

export function useApiCall({ url, condition }: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      if (condition) {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData.data.results);
      } else {
        setData([]);
      }
    };
    fetchUrl();
  }, [url, condition]);

  return data;
}
