import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Tools from './component/Tools';
import Games from './component/Games';
import Others from './component/Others';
import Divider from './component/Divider';
import Calculator from './component/darkstrike/Calculator';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Divider />
        <Navbar />
        <Divider />
        <Routes>
          <Route path="/tools" element={<Tools />} />
          <Route path="/games" element={<Games />} />
          <Route path="/others" element={<Others />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;