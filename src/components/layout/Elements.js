import React from 'react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import loading from '../../media/smallloader.gif';
const history = createBrowserHistory();

const Container = styled.div`
  overflow: hidden;
  width: 70%;
  margin: -50px auto 50px;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(66, 68, 90, 0.7);
  @media (max-width: 998px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const But1 = styled.button`
  min-width: 75px;
  height: 35px;
  outline: 0;
  border: 0;
  border-radius: 5px;
  background: lightblue;
  &:hover {
    cursor: pointer;
    background: rgb(132, 182, 199);
  }
`;
const But2 = styled.button`
  margin: 60px 10px 10px 10px;
  background: lightseagreen;
  border: 0;
  border-radius: 3px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgb(36, 207, 199);
  }
`;
const Loading = styled.div`
  margin: 50px auto;
  width: 200px;
  height: 200px;
  /* border: 2px solid black; */
  display: grid;
  place-items: center;
  opacity: 0;
  animation: showMyself forwards 5ms;
  @keyframes showMyself {
    100% {
      opacity: 1;
    }
  }
  img {
    width: 50%;
    height: 50%;
  }
`;

const goBackOnePage = () => {
  history.goBack();
};

export const Wrapper = (props) => {
  return <Container>{props.children}</Container>;
};

export const Button = (props) => {
  return <But1>{props.children}</But1>;
};

export const BackButton = (props) => {
  return <But2 onClick={goBackOnePage}>{props.children}</But2>;
};

export const Loader = () => {
  return (
    <Loading>
      <img src={loading} alt="" />
    </Loading>
  );
};
