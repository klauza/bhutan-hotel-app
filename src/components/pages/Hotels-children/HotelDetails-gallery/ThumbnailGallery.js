import React, { Fragment, useState } from 'react';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  display: flex;
  background: #ddd;
  height: 500px;
  width: 1024px;
  margin: 40px auto;
`;
const Questions = styled.div`
  text-align: center;

`;

// styles-end

const ThumbnailGallery = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);


  const handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index');
    setActiveIndex(newActiveIndex);
  }

  if(images){
    return (
      <Fragment>
        <Wrapper>
          {/* left */}
          <div style={{ flex: "1" }}>
            <ActiveThumbnailWindow key={activeIndex} activeThumbnail={images[activeIndex]}/>
            <ThumbnailGrid imgs={images} handleClick={handleClick} />
          </div>
          
          {/* right */}
          <div style={{ flex: "1" }}>right</div>

        </Wrapper>
        <Questions><p>In case you would have any questions <br/> call: 02329322394</p></Questions>
      </Fragment>
    )
  } else {
    return(<div>loading</div>)
  }
  
}




export default ThumbnailGallery