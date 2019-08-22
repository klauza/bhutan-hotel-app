import React, {Fragment} from 'react'
import styled from 'styled-components';

const Card = styled.div`
  flex: 1;
  min-width: 300px;
  height: 300px;
  opacity: 0.5;
  transition: opacity 300ms linear, transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: scale(0.5);
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HotelImage = ({image, id}) => {

  return (
    <Fragment>
      <Card className={`card card-${id}`}>
        <img src={image} alt=""/>
      </Card>
    </Fragment>
  )
}

export default HotelImage
