import { Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: 'white', textAlign: 'center' }}
      >
        Copyright © {year}
        <Link to="/"> Jikmunn Cryptoverse Mania Inc.</Link> <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
};

export default Footer;
