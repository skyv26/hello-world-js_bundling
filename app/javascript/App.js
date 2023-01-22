import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';
import { GreetingThunk } from './redux/greetingSlice';
import Greeting from './components/Greeting/Greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GreetingThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/greetings" element={<Greeting />} />
      <Route path="/about" element={<h1>Hello World!</h1>} />
      <Route path="/" element={<Navigate replace to="/greetings" />} />
    </Routes>
  );
};

export default App;
