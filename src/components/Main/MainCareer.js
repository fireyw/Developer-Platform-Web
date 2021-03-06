import React from 'react';
import MainContainer from '../Common/styles/MainContainer';
import ContentHeader from '../Common/styles/ContentHeader';
import ContentTitle from '../Common/styles/ContentTitle';
import ViewMore from '../Common/styles/ViewMore';
import PrevButton from '../Common/styles/PrevButton';
import NextButton from '../Common/styles/NextButton';

const MainCareer = () => {
  return (
    <MainContainer>
      <ContentHeader>
        <ContentTitle>진행중인 채용 프로그램</ContentTitle>
        <div style={{display: 'flex'}}>
          <ViewMore/>
          <PrevButton/>
          <NextButton/>
        </div>
      </ContentHeader>
    </MainContainer>
  )
}

export default MainCareer;