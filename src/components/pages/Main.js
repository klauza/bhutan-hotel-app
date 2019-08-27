import React, {Fragment} from 'react';
import MainCarrousel from './Main-children/MainCarousel';
import MainCards from './Main-children/MainCards';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';
import { logo1, logo2, carImg } from '../../media/index';

const Sponsors = styled.div`
  width: 100%;
  height: auto;
  /* background: #f2f5f7; */
  display: flex;
  flex-direction: column;
  p{
    text-align: center;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;
const SponsorsLogos = styled.div`
width: auto;
margin: 0 auto;
  img{
    width: 75px; height: 75px; object-fit: cover; 
  }
`;
const Description = styled.div`
  margin: 100px 0;
  text-align: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: white;
  display: block;
  h1{
    letter-spacing: 3px;
    font-weight: 900;
  }
  p{
    font-size: 1.1rem;
  }
  p:nth-child(2){
    margin: 20px 0;
  }
`;
const CarDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px auto -50px;
`;
const CarDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CarImage = styled.div`
  flex: 1;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;
const CarTopDesc = styled.h3`
  text-align: center;
`;
const CarTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  &:after{
    content:'';
    background: rgb(0, 0, 0);
    width: 50%;
    height: 3px;
    border: 0; border-radius: 35px;
    margin: 20px auto 20px;
    display: block;
  }
`;
const CarButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background: green;
  color: white;
`;


const Main = () => {
  return (
    <Fragment>
      <MainCarrousel/>

      <Sponsors>
        <p>Collaborators</p>
        <SponsorsLogos>
          <img src={logo1} alt=""/>
          <img src={logo2} alt=""/>
        </SponsorsLogos>
      </Sponsors>
      
      <Description>
          <h1>By travellers for travellers</h1>

          <p> <strong>Once we were travellers too, just like you. Discovering new horizons, <br/>
          broadening knowledge, meeting new interesting people.</strong></p>

          <p> Now, we help you achieve even something bigger <br/>
          We help you with finding answers and provide a needed comfort.</p>
      </Description>

      <Wrapper>
        <MainCards />
      
        <CarDiv>
            <CarDesc>
              <CarTopDesc>Would you like to speed up your exploration?</CarTopDesc>
              <CarTitle>Rent a car!</CarTitle>
              <CarButton>Check deals</CarButton>
            </CarDesc>

            <CarImage>
              <img src={carImg} alt=""/>
            </CarImage>
        </CarDiv>

      </Wrapper>
    </Fragment>
  )
}

export default Main
