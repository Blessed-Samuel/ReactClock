import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/Home';
import About from './app/About';
import Service from './app/Service';
import NavBar from './components/NavBar';
import './styles/output.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
