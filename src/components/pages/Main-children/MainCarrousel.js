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
  margin-bottom: 50px;
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

const MainCarrousel = () => {

  
  const images = [
    "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2129814/pexels-photo-2129814.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ]




  return (
    <Wrapper>

      <Carousel showStatus={false} selectedItem={0} showThumbs={false} infiniteLoop={true} interval={3000} autoPlay={true}>
        {images.map((img, i) => {
          return(
          <div key={i}>
            <img src={img} alt="" />
          </div>)
        })}
      </Carousel>

    </Wrapper>
  );
}

const imageAlign = {
  "width:": "100%",
  "height": "100%",
  "objectFit": "cover"
}

export default MainCarrousel
