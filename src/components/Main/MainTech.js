import React from 'react';
import MainContainer from '../Common/styles/MainContainer';
import ContentHeader from '../Common/styles/ContentHeader';
import ContentTitle from '../Common/styles/ContentTitle';
import ViewMore from '../Common/styles/ViewMore';
import PrevButton from '../Common/styles/PrevButton';
import NextButton from '../Common/styles/NextButton';

const MainTech = () => {
  return (
    <MainContainer>
      <ContentHeader>
        <ContentTitle>최신 트렌드 테크뉴스</ContentTitle>
        <div style={{display: 'flex'}}>
          <ViewMore/>
          <PrevButton/>
          <NextButton/>
        </div>
      </ContentHeader>
    </MainContainer>
  )
}

export default MainTech;