import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 95%; }
`;
const Wrapper = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Wrapper
