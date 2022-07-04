import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:countryId" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
