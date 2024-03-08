import React from 'react';
import Header from './Components/Header';
import Coins from './Components/Coins';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header/>
      <Coins/>
      <Routes>
        <Route path="/coins" element={<Coins />} />
      </Routes>
    </Router>
  );
};

export default App;
