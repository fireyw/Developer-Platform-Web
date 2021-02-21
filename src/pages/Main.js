import React from 'react';
import Header from '../components/Common/Header';
import Content from '../components/Main/Content';

const Main = () => {
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

export default Main;