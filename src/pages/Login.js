import React from 'react';
import Header from '../components/Common/Header';
import StyledContainer from '../components/Common/styles/StyledContainer';
import Content from '../components/Login/Content';

const Login = () => {
  return (
    <StyledContainer>
      <Header/>
      <Content/>
    </StyledContainer>
  );
};

export default Login;