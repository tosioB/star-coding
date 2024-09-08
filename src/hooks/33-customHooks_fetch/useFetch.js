import { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/"

export function useFetch(initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + type)
      .then(res => res.json())
      .then(res => setData(res))
  }

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return { data, fetchUrl }
}