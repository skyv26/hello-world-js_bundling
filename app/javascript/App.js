import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';
import Header from './components/Header/Header';
import { GreetingThunk } from './redux/greetingSlice';
import Greeting from './components/Greeting/Greeting';
import About from './components/About/About';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GreetingThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/greetings" element={<Greeting />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate replace to="/greetings" />} />
      </Routes>
    </>
  );
};

export default App;
