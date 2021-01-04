import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "5c1cac8a3c8f92ab3";

const useGoogleSearch = (term) => {
  // CUSTOM HOOK
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      fetch(
        // endpoint
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
    }
    fetchData();
  }, [term])
  return { data }
};

export default useGoogleSearch
