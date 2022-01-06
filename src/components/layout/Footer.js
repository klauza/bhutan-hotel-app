import React from 'react';
import styled from 'styled-components';

const Wraper = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #d4d4d4;
  background: linear-gradient(
    90deg,
    rgba(36, 36, 36, 1) 0%,
    rgba(156, 156, 156, 1) 25%,
    rgba(156, 156, 156, 1) 75%,
    rgba(36, 36, 36, 1) 100%
  );
  p {
    color: #494949;
    text-align: center;
    line-height: 50px;
    font-size: 11px;
  }
`;

const Footer = () => {
  return (
    <Wraper>
      <p>Website created for educational purposes.</p>
    </Wraper>
  );
};

export default Footer;
