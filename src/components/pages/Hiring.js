import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Guides from './Guides';
import Cars from './Cars';
import { Wrapper } from '../layout/Elements';
import { guides_hero_image, cars_hero_image } from '../../media/index';
// import history from '../../history';

const HiringTopContainer = styled.div`
  width: 70%; height: auto;
  @media(max-width: 900px){ width: 90%; }
  margin: 50px auto 50px;
  display: flex; flex-direction: row;
  border: 2px solid black; border-radius: 3px;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
`;
const GuidesButton = styled.div`
  width: 100%;
  height: 250px;
  transition: filter 250ms ease;
  position: relative;
  filter: ${ props => props.isHighlighted ? ("brightness(1) grayscale(0)") : ("brightness(0.5) grayscale(70%)") };
  &:hover{
    cursor: pointer;
  }
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
  p{
    color: #3f879c;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* background: #556677; */
    letter-spacing: .1em;
    text-shadow: #000 3px 5px 2px;
    /* color: white;  */
    font-weight: 700; 
    font-size: 2em; 
    position: absolute; bottom: 5%; left: 50%; transform: translateX(-50%);
  }
`;
const CarsButton = styled.div`
  width: 100%;
  height: 250px;
  transition: filter 250ms ease;
  position: relative;
  filter: ${ props => props.isHighlighted ? ("brightness(1) grayscale(0)") : ("brightness(0.5) grayscale(70%)") };
  &:hover{
    cursor: pointer;
  }
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
  p{
    color: #cf5151;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* background: #556677; */
    letter-spacing: .1em;
    text-shadow: #000 3px 5px 2px;
    /* color: white;  */
    font-weight: 700; 
    font-size: 2em; 
    position: absolute; bottom: 5%; left: 50%; transform: translateX(-50%);
  }
`;



const Hiring = () => {

  const [hiringPage, setHiringPage] = useState(true);
  const [guidesHighlighted, setGuidesHighlighted] = useState(true);
  const [carsHighlighted, setCarsHighlighted] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  
  const changeHiringPage = (bool) => {
    if(bool === true && hiringPage !== true){
      setHiringPage(true);
      setGuidesHighlighted(!guidesHighlighted);
      setCarsHighlighted(!carsHighlighted);
    }

    if(bool === false && hiringPage !== false){
      setHiringPage(false);
      setCarsHighlighted(!carsHighlighted);
      setGuidesHighlighted(!guidesHighlighted);
    }
   
  }
  

  return (
    <Wrapper>

      <HiringTopContainer>

        <GuidesButton isHighlighted={guidesHighlighted} onClick={()=>changeHiringPage(true)}>
          <img src={guides_hero_image}  alt=""/>
          <p>Guides</p>
        </GuidesButton>

        <CarsButton isHighlighted={carsHighlighted} onClick={()=>changeHiringPage(false)}>
          <img src={cars_hero_image} alt=""/>
          <p>Cars</p>
        </CarsButton>

      </HiringTopContainer>

      {hiringPage === true ? (
        <Guides/>
      ) : (
        <Cars/>
      )}
      
    </Wrapper>
  )
}

export default Hiring
