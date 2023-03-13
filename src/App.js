import { Layout } from 'antd';
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './components/Index';
import {
  Home,
  News,
  Exchanges,
  CryptoDetails,
  CryptoCurrencies,
} from './pages/Index';

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
