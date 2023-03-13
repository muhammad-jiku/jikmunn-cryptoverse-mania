import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components/Index';
import CryptoDetails from './pages/Crypto/Index';
import CryptoCurrencies from './pages/CryptoCurrencies/Index';
import Exchanges from './pages/Exchanges/Index';
import Home from './pages/Home/Index';
import News from './pages/News/Index';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
