import React from 'react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const Container = styled.div`
  width: 70%;
  margin: 50px auto 50px;
  overflow: ${props => props.padding};
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
const But2 = styled.button`
  margin: 60px 10px 10px 10px;
  background: lightseagreen;
  border: 0; border-radius: 3px;
  padding: 10px;
  &:hover{
    cursor: pointer;
    background-color: rgb(36, 207, 199);
  }
`;

const goBackOnePage = () => {
  history.goBack();
}


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

export const BackButton = (props) => {
  return (
    <But2 onClick={goBackOnePage}>{props.children}</But2>
  )
}

