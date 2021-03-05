import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
`

function MainContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MainContainer;