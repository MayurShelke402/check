// In your main component or App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './components/CategoryPage';
import MenuOverview from './components/MenuOverview';
function App() {
  
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu/:categoryId" element={<CategoryPage />} />
    <Route path="/menu" element={<MenuOverview />} />
    </Routes>
    </Router>
    
  );
}

export default App;


