import React from 'react';
import styled from 'styled-components';

const Category = styled.span`
    position: relative;
    z-index: 1;
    color: #2b80f2;
    font-size: 18px;
    font-weight: 600;
    padding-right: 8px;
  &:after {
    position: absolute;
    border: 8px solid #f2f4f8;
    z-index: -1;
    content: "";
    top: 30%;
    left: -8%;
    width: 75%;
  }
`
const Title = styled.span`
  color: #353535;
  font-size: 18px;
  font-weight: 500;
`
const SubTitle = styled.p`
  color: #757575;
  font-size: 15px;
  margin-top: 6px;
`

function StudyTitle({category, title, subtitle}) {
    return (
        <>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </>
    )
}

export default StudyTitle;