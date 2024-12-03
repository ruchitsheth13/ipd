"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/stocks/all')
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default Page;