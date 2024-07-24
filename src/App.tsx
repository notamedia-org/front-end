import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <BrowserRouter basename='front-end'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/competitions" element={<HomePage />} />
        <Route path="/competitions/types" element={<HomePage />} />
        <Route path="/standards" element={<HomePage />} />
        <Route path="/help" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
