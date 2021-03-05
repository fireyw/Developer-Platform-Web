import React from 'react';
import styled from 'styled-components';
import mainimage from '../../assets/images/mainimage@2x.png'
import MainContainer from '../Common/styles/MainContainer';

const ImageContainer = styled.div`
  width: 100%;
  height: 328px;
  background-color: #1D2145;
  margin-bottom: 48px;
  cursor: pointer
`
const Image = styled.img`
  height: 328px;
`

const MainImage = () => {
  return (
    <ImageContainer>
      <MainContainer>
        <Image src={mainimage} alt="mainimage"/>
      </MainContainer>
    </ImageContainer>
  )
}

export default MainImage
