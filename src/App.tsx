import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { MainPage } from './components/MainPage';
import { BrowsePage } from './components/BrowsePage';
import { AuthPage } from './components/AuthPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
