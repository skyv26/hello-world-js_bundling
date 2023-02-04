import React from 'react';
import { useSelector } from 'react-redux';
import style from './Greeting.module.css';

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const { greeting } = message;
  return (
    <div className={style.Greeting}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
