import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const { greeting } = message;
  return (
    <h1>{greeting}</h1>
  );
};

export default Greeting;
