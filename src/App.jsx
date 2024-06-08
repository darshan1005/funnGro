import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav-Bar/Nav';
import Teen from './Teen';
import Company from './Company';
import Info from './components/Funngro-info/info';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Chatbot from './components/Chat-bot/Chat-bot';
import Featured from './components/Featured/Featured'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/teen" element={<Teen />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Chatbot />
      <Featured />
      <Info />
      <Footer />
    </Router>
  );
}

export default App;
