import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import guidesData from './GuideData';

// STYLES
const Wrapper = styled.div`
  width: 70%;
  margin: 100px auto 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`;
const GridLeft = styled.div`
  justify-self: center;
  text-align: center;
`;
const GridImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
const GridGuideName = styled.p`
  font-size: 1.6rem;
`;
const GridRight = styled.div`
  border: 2px solid black;
  position: relative;
  background: lightblue;
  &::before{
    content: '';
    display: block;
    position: absolute; top: 50%; left: -21.5px; transform: translateY(-50%) rotateZ(45deg);
    width: 40px; height: 40px;
    background: lightblue;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
  }
`;
const TextContainer = styled.p`
  color: red;
  text-align: center;
  padding: 20px;
`;
// styles-end
const GuideDetails = (props) => {
  const [thisGuide, setThisGuide] = useState(null)
  // const [loader, setLoader] = useState(false);

  useEffect(() =>{
    try{
      var { guide } = props.location.state
      setThisGuide(guide);
    } catch(err){
      
    }
    
    if(!guide){
      // if page entered from outer source, get guide from url as text and find him in local array
      const guideId = props.match.params.name;
      let name = guideId.replace(/-/i, ' ');
      
      guidesData.find(guide => guide.name.toLowerCase() === name && setThisGuide(guide));
    }

  }, [props.location.state, props.match.params.name]);
  if(thisGuide){
  return (

    <Wrapper>
      <Grid>
        <GridLeft>
          <GridImage src={thisGuide.img} />
          <GridGuideName>{thisGuide.name}</GridGuideName>
          <i className="fa fa-phone"></i> 07394234511
        </GridLeft>

        <GridRight>
          <TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ex! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vero quisquam blanditiis voluptas ut deserunt impedit libero ipsa perspiciatis, minus quis dicta, harum reprehenderit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti quas quia beatae totam ipsum?
          </TextContainer>
        </GridRight>
      </Grid>
    </Wrapper>

  )

  } else {
    return (<div>Loading...</div>)
  }
}

export default GuideDetails
