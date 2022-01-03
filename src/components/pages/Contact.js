import React, { useState } from 'react';
import styled from 'styled-components';
import MapContact from './Contact-children/MapContact';
import { Wrapper } from '../layout/Elements';

//media
import { contactHeader } from '../../media/index';

// PAGE STYLES
const HeadBar = styled.div`
  margin: 10px auto 100px;
  height: auto;
  width: 100%;
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
    height: 100%;
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
    rgba(8, 105, 19, 1) 0%,
    rgba(16, 181, 36, 1) 45%,
    rgba(19, 227, 43, 1) 100%
  );
  width: 100%;
  h1 {
    letter-spacing: 5px;
    font-size: 3.5em;
    text-shadow: 2px 2px #000;
  }
  .contact-help {
    padding: 10px 0;
  }

  @media (max-width: 768px) {
    padding-left: unset;
    padding: 10px;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(8, 105, 19, 1) 0%,
      rgba(16, 181, 36, 1) 45%,
      rgba(19, 227, 43, 1) 100%
    );
    h1 {
      font-size: 12vw;
    }
    p {
      font-size: 14px;
    }
  }
`;

// archive
const TitleMain = styled.h1`
  flex: 1;
  font-size: 2.75em;
  text-align: right;
  align-self: center;
  border-right: 1px solid lightgrey;
  margin-right: 10px;
  padding-right: 10px;
  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

// -----------MAP----------- //

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  position: relative;
`;
const MapHeader = styled.p`
  text-align: center;
  background: black;
  color: white;
  margin: 0;
  padding: 5px 0;
`;
const MapOverlay = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  min-height: 631px;
  box-shadow: 0px 5px 6px -2px rgba(117, 117, 117, 0.65);
  &::after {
    content: 'Click to use map';
    text-align: center;
    color: white;
    font-size: 1.6em;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const TheMap = styled.div`
  z-index: 1;
  transition: all 250ms ease;
  opacity: ${(props) => (props.ishidden ? '0.5' : '1')};
  pointer-events: ${(props) => (props.ishidden ? 'none' : 'auto')};
  touch-action: ${(props) => (props.ishidden ? 'none' : 'auto')};
`;

// styles-end

const Contact = () => {
  const [wrapped, setWrapped] = useState(true);

  const runFunction = () => {
    setWrapped(false);
  };

  return (
    <Wrapper>
      <HeadBar>
        <HeaderImage>
          <div className="header-image-container">
            <img src={contactHeader} alt="contact-img" />
          </div>
        </HeaderImage>

        <HeaderBody>
          <h1>Contact</h1>

          <div className="contact-help">
            <p>Need immediate help or have a question?</p>
            <p>We always help, we love to help!</p>
          </div>

          <div>
            <i className="fa fa-phone" style={{ fontSize: '1.6rem' }}></i>
            {'  '}
            <strong>02422515431</strong>
          </div>
        </HeaderBody>
      </HeadBar>

      <FlexLayout>
        <MapOverlay onClick={runFunction}>
          <MapHeader>Trouble with finding our facility? Use the map.</MapHeader>
          <TheMap
            ishidden={wrapped}
            className="map"
            style={{ backgroundColor: 'lightblue', height: '600px' }}
          >
            <MapContact />
          </TheMap>
        </MapOverlay>
      </FlexLayout>
    </Wrapper>
  );
};

export default Contact;
