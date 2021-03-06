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
        <ContentTitle>이데아 커뮤니티 보기</ContentTitle>
        <div style={{display: 'flex'}}>
          <ViewMore/>
          <PrevButton/>
          <NextButton/>
        </div>
      </ContentHeader>
      <div style={{height: '1000px'}}></div>
    </MainContainer>
  )
}

export default MainCareer;