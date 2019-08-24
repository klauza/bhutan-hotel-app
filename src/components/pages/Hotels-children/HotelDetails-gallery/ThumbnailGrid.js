import React from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

// STYLES
const GridContainer = styled.div`
  height: 20%;
  width: 100%;
  /* margin: 0 auto; */
  /* background: #444; */
  display: flex;
  flex-wrap: wrap;
`;
// end-styles


const ThumbnailGrid = ({imgs, handleClick}) => {
  return (
    <GridContainer>
      
      {imgs.map((img, index) => {
        return <Thumbnail key={index} img={img} index={index} handleClick={handleClick} />
      })}
      
    </GridContainer>
  )
}

export default ThumbnailGrid
