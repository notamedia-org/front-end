import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import CompetitionsPage from './pages/CompetitionsPage';
import CompetitionTypesPage from './pages/CompetiotionTypesPage';
import StandardsPage from './pages/StandardsPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <BrowserRouter basename='front-end'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/competitions/types" element={<CompetitionTypesPage />} />
        <Route path="/standards" element={<StandardsPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
