import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/output.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element />
          <Route path="/About" element/>
          <Route path="/Service" element />
        </Routes>
      </Router>
    </>
  );
}

export default App;
