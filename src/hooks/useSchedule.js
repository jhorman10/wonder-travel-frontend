import { useEffect, useState } from 'react';
import axios from '../api/schedule';

export const useSchedule = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return { data };
};
