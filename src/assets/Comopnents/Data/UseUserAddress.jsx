import { useEffect, useState } from 'react';

export const useUserAddress = async () => {
  const [address, setAddress] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await fetch('/src/assets/API/FetchAddress.jsx'); // Assuming you have an API endpoint named 'fetchAddress'
        if (!response.ok) {
          throw new Error('Failed to fetch address');
        }
        const data = await response.json();
        setAddress(data);
      } catch (error) {
        console.error(error);
        setError('Something went wrong');
      }
    };

    fetchAddress();
  }, []);

  return { address, error };
};


