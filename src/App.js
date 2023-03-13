import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CryptoDetails from './components/Crypto/Index';
import CryptoCurrencies from './components/CryptoCurrencies/Index';
import Exchanges from './components/Exchanges/Index';
import Homepage from './components/Home/Index';
import News from './components/News/Index';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
