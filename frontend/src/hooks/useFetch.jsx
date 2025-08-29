import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError('Failed to fetch');
          return;
        }

        const result = await response.json();
        setApiData(result.data ); // handle both cases
        


      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
    };

    fetchData();
  }, [url]);

  return { apiData, error };
};

export default useFetch;
