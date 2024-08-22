import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FetchComponent = () => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["Cat"],
    queryFn: () => axios.get("https://catfact.ninja/facts").then((res) => {
      return res.data.data; 
    })
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Cat Facts</h1>
      <ol>
        {data.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ol>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default FetchComponent;
