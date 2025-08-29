import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log('Fetching from:', url);
        
        // Add timeout control
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort();
          console.log('Request timed out after 15 seconds');
        }, 15000); // 15 second timeout for Vercel cold starts
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal
        });
        
        // Clear timeout if request completes
        clearTimeout(timeoutId);
        
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.log('Error response body:', errorText);
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('API Response:', result);
        
        // Handle both array and object responses
        if (result.success && result.data) {
          setApiData(result.data);
        } else if (Array.isArray(result)) {
          setApiData(result);
        } else {
          setApiData([]);
        }
        
      } catch (err) {
        console.error('Fetch error details:', err);
        
        // Handle different types of errors
        if (err.name === 'AbortError') {
          setError('Request timeout. Server might be starting up, please try again.');
        } else if (err.message.includes('Failed to fetch')) {
          setError('Network error. Please check your internet connection or try again later.');
        } else if (err.message.includes('CORS')) {
          setError('Cross-origin request blocked. Please contact support.');
        } else {
          setError(err.message || 'Something went wrong. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { apiData, error, loading };
};

export default useFetch;