import React, { Fragment, useState } from 'react';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  display: flex;
  height: 750px;
  @media(max-width: 768px){ height: 500px;}
  max-width: 1024px;
  margin: 40px auto;
  @media(max-width: 768px){
    width: 100%;
  }
`;
const Separator = styled.hr`
  height: 1px;
  color: red;
  background-color: rgba(0,0,0,0.15);
  border: none;
  width: 70%;
  margin: -100px auto 20px auto;
`;
const GoldenText = styled.p`
 text-align: left;
 margin-bottom: 15px;
 color: gold;
 letter-spacing: 3px;
 /* text-transform: uppercase; */
 font-family: Halvetica;
 font-size: 1.75em;
`;
const FlatStory = styled.p`
  margin-bottom: 25px;
`;
const Questions = styled.div`
  text-align: center;
  margin: 15px 0;
`;

// styles-end

const ThumbnailGallery = ({features, images}) => {
  const [activeIndex, setActiveIndex] = useState(0);


  const handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute('data-index');
    setActiveIndex(newActiveIndex);
  }

  if(images){
    return (
      <Fragment>
        <Wrapper>
          
          <div>
            <ActiveThumbnailWindow key={activeIndex} activeThumbnail={images[activeIndex]}/>
            <ThumbnailGrid imgs={images} handleClick={handleClick} />
          </div>
          

        </Wrapper>
        
        <Separator />
        <GoldenText>Short Story Long</GoldenText>
        <FlatStory>The story about the flat goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quasi reprehenderit perferendis iure dolore fugiat? Cupiditate, in numquam laboriosam repudiandae explicabo ad. Aut maiores tempore modi repudiandae provident debitis obcaecati voluptas quaerat necessitatibus libero sed eum eius recusandae tenetur enim quod sint harum minima quasi, fuga magnam temporibus. Autem, sunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias eius vel omnis doloribus quaerat.</FlatStory>

        <GoldenText>Flat Exclusive Features</GoldenText>

        {features.map(feature => <li>{feature}</li>)}
   

        <Questions><p>In case you would have any questions <br/> call: 02329322394</p></Questions>
      </Fragment>
    )
  } else {
    return(<div>loading</div>)
  }
  
}




export default ThumbnailGallery