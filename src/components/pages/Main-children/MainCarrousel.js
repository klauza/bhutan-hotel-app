import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Wrapper = styled.div`
  overflow: hidden;
  object-fit: cover;
  height: 50vh;
  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 0px;
  li{
    div{
      height: 100%;
    }
    height: 50vh;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
const CarrouselText = styled.p`
  width: 60%; height: auto;
  position: absolute;
  bottom: 10%;
  left: 50%; transform: translateX(-50%);
  color: white;
  font-size: 2em;
  text-transform: uppercase;
  background: linear-gradient(to right,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.5) 25%,
    rgba(0,0,0,0.5) 75%,
    rgba(0,0,0,0) 100%
    );
`;
const MainCarrousel = () => {

  
  const images = [
    "https://images.pexels.com/photos/1422391/pexels-photo-1422391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/678634/pexels-photo-678634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ]
  const text = [
    "Beautiful cities",
    "Amazing views",
    "Legendary mythic places"
  ]


  return (
    <Wrapper>

      <Carousel showStatus={false} selectedItem={0} showThumbs={false} infiniteLoop={true} interval={3000} autoPlay={true}>
        {images.map((img, i) => {
          return(
          <div key={i}>
            <img src={img} alt="" />
            <CarrouselText>{text[i]}</CarrouselText>
          </div>)
        })}
      </Carousel>

    </Wrapper>
  );
}


export default MainCarrousel
