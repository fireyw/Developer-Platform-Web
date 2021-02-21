import React from 'react';
import Header from '../components/Common/Header';
import Content from '../components/Login/Content';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      }}
    >
      <Header/>
      <Content/>
    </div>
  );
};

export default Login;