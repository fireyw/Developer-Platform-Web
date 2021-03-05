import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

function StyledContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default StyledContainer;