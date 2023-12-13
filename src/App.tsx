import React from 'react';
import {Route, Router, Routes} from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import BrowsePage from './components/BrowsePage';
import AuthPage from './components/AuthPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;