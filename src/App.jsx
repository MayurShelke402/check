// In your main component or App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu/:category" element={<MenuCategory />} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;