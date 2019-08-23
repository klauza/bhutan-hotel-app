import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media(max-width: 998px){ width: 85%; }
  @media(max-width: 768px){ width: 95%; }
`;
const But1 = styled.button`
  min-width: 75px; height: 35px;
  outline: 0; border: 0;
  border-radius: 5px;
  background: lightgrey;
  &:hover{
    cursor: pointer;
    background: grey;
  }
`;


export const Wrapper = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}


export const Button = (props) => {
  return (
    <But1>{props.children}</But1>
  )
}

