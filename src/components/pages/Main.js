import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MainCarrousel from './Main-children/MainCarousel';
import MainCards from './Main-children/MainCards';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';
import { logo1, logo2, logo3, logo4, carImg } from '../../media/index';

const Sponsors = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  /* background: #f2f5f7; */
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  background: rgba(255, 255, 255, 0.35);
  p,
  h1 {
    margin-top: 12.5px;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 700;
    /* font-size: 1.5rem; */
    /* text-transform: uppercase; */
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 0 10px;
    transition: all 300ms ease;
    &:hover {
      transition: all 300ms ease;
      transform: rotate(10deg);
    }
  }
`;
const SponsorsLogos = styled.div`
  height: 70px;
  margin: 12.5px auto;
  /* width: 400px; // 180px */
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-items: center;
  @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }

  // .mover
  & > div {
    height: 70px;
    height: 100%;
    width: 640px; // 480px
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    &:hover {
      animation-play-state: paused;
    }
  }

  .mover {
    animation: moveSlideshow 4s linear infinite;
  }
`;

const Description = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin: 100px 0 150px;
  text-align: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: rgba(255, 255, 255, 0.35);
  display: block;
  h1 {
    letter-spacing: 3px;
    font-weight: 700;
  }
  p {
    font-size: 1.1rem;
  }
  p:nth-child(2) {
    margin: 20px 0;
  }
`;
const CarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  margin: 100px 5px 100px;
`;
const CarDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 10px;
`;
const CarTopDesc = styled.h3`
  text-align: right;
`;
const CarTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  &:after {
    content: '';
    background: #d4d4d4;
    width: 100%;
    height: 3px;
    border: 0;
    border-radius: 35px;
    /* margin-left: auto; */
    margin: 5px 0 25px auto;
    display: block;
  }
`;

const CarButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background: green;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const CarImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Main = () => {
  return (
    <Fragment>
      <MainCarrousel />

      <Sponsors>
        <h1>Collaborators</h1>
        <SponsorsLogos>
          {/* <div className="mover"> */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo1} alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo2} alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo3} alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/"
          >
            <img src={logo4} alt="" />
          </a>

          {/* </div> */}
        </SponsorsLogos>
      </Sponsors>

      <Description>
        <h1>By travellers for travellers</h1>

        <p>
          We used to be travellers too, just like you. Discovering new horizons,
          <br />
          broadening knowledge, meeting new interesting people.
        </p>

        <p>
          Now our goal is to help you achieve even something bigger. <br />
          We help you to find answers and provide a needed comfort.
        </p>
      </Description>

      <Wrapper>
        <MainCards />

        <CarDiv>
          <CarDesc>
            <CarTopDesc>
              Would you like to speed up your exploration?
            </CarTopDesc>
            <CarTitle>Rent a car!</CarTitle>
            <Link to="/hiring">
              <CarButton>Check deals</CarButton>{' '}
            </Link>
          </CarDesc>

          <CarImage>
            <img src={carImg} alt="" />
          </CarImage>
        </CarDiv>
      </Wrapper>
    </Fragment>
  );
};

export default Main;
