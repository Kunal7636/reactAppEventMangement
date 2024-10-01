import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUpPage from './assets/components/SignUpPage'; // Correct path

import './styles/App.css';

function App() {
  return (
    <Router>
      {/* Remove or comment out these components for now */}
      {/* <Header /> */}
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
