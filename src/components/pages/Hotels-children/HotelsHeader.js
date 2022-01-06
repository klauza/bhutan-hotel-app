import React, { useEffect } from 'react';

import styled from 'styled-components';
//media
import { apartmentsHeader } from '../../../media/index';

// styles

const HeadBar = styled.div`
  position: 'relative';
  margin: 10px auto 100px;
  height: auto;
  width: 100%;

  opacity: 0;
  transform: translateX(-150px);

  transition: all 500ms ease;
  transition-delay: 175ms, 175ms;
  transition-property: transform, opacity;

  @media (max-width: 768px) {
    width: 100%;
  }

  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 5px 6px -2px rgba(117, 117, 117, 0.65);
`;
const HeaderImage = styled.div`
  .header-image-container {
    width: 350px;
    height: 235px;
    @media (max-width: 768px) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const HeaderBody = styled.div`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(22, 72, 133, 1) 0%,
    rgba(19, 114, 227, 1) 45%,
    rgba(110, 176, 255, 1) 100%
  );
  width: 100%;
  h1 {
    letter-spacing: 5px;
    font-size: 3.5em;
    text-shadow: 2px 2px #000;
  }
  .apartment-info {
    padding: 10px 0;
  }
  @media (max-width: 1270px) {
    h1 {
      /* letter-spacing: 5px; */
      font-size: 2.15em;
    }
  }

  @media (max-width: 768px) {
    padding-left: unset;
    padding: 10px;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(22, 72, 133, 1) 0%,
      rgba(19, 114, 227, 1) 45%,
      rgba(110, 176, 255, 1) 100%
    );
    h1 {
      font-size: 8vw;
    }
    p {
      font-size: 14px;
    }
  }
`;

const HotelsHeader = () => {
  useEffect(() => {
    document.querySelectorAll('.hide-show-apartments').forEach((each) => {
      each.style.opacity = '1';
      each.style.transform = 'translateX(0px)';
    });
  }, []);

  return (
    <HeadBar className="hide-show-apartments">
      <HeaderImage>
        <div className="header-image-container">
          <img src={apartmentsHeader} alt="apartment-img" />
        </div>
      </HeaderImage>

      <HeaderBody>
        <h1>Apartments</h1>

        <div className="apartment-info">
          <p>We offer a vast amount of comfortable rooms.</p>
          <br />
          <p>
            <i className="fa fa-info-circle" style={{ fontSize: '1.6rem' }}></i>{' '}
            Price refers to daily stay. Also, these rooms used to be inhabited
            by progenitors. Feel their presence, absorb the energy and relax
            flowing through the chambers.
          </p>
        </div>
      </HeaderBody>
    </HeadBar>
  );
};

export default HotelsHeader;
