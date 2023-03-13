import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import CryptoDetails from './pages/Crypto/Index';
import CryptoCurrencies from './pages/CryptoCurrencies/Index';
import Exchanges from './pages/Exchanges/Index';
import Homepage from './pages/Home/Index';
import News from './pages/News/Index';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
