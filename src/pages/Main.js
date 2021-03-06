import React from 'react';
import Header from '../components/Common/Header';
import StyledContainer from '../components/Common/styles/StyledContainer';
import MainProfile from '../components/Main/MainProfile';
import MainImage from '../components/Main/MainImage';
import MainStudy from '../components/Main/MainStudy';
import MainCareer from '../components/Main/MainCareer';
import MainTech from '../components/Main/MainTech';
import MainCommunity from '../components/Main/MainCommunity';

const Main = () => {
  return (
    <StyledContainer>
      <Header/>
      <MainImage/>
      <MainStudy/>
      <MainCareer/>
      <MainTech/>
      <MainCommunity/>
      {/* <MainProfile/> */}
    </StyledContainer>
  );
};

export default Main;