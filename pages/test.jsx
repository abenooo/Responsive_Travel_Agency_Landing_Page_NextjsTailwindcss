import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://dummyjson.com/products';

const FetchData = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get(apiUrl);

    setData(response);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []); // pass an empty array to only run effect once

  return (
     <div>
            Data fetched from API: {JSON.stringify(data)}        
          </div>
  );
};
export default FetchData;
