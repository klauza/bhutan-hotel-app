import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import guidesData from './GuideData';
import {Wrapper, BackButton} from '../../layout/Elements';

// STYLES
const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media(max-width:768px){ grid-template-columns: 1fr; }

`;
const GridLeft = styled.div`
  justify-self: center;
  text-align: center;
  a{
    color: black;
    font-weight: 700;
  }
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
  @media(max-width:768px){ margin-top: 35px; height: auto; max-width: unset;}
  border: 2px solid black;
  position: relative;
  background: grey;
  height: 250px;
  max-width: 450px;
  display: flex; align-items: center;
  &::before{
    content: '';
    display: block;
    position: absolute; top: 50%; left: -21.5px; transform: translateY(-50%) rotateZ(45deg);
    width: 40px; height: 40px;
    background: grey;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    @media(max-width:768px){
      top: -21.5px; left: 50%; transform: translateX(-50%) rotateZ(45deg);
      border: 0; border-left: 2px solid black; border-top: 2px solid black;
    }
  }
`;
const GridRightTextContainer = styled.p`
  color: white;
  text-align: center;
  padding: 20px;
`;
const Separator = styled.hr`
  margin: 25px auto;
  width: 60%;
`;
const ExpertiseGrid = styled.div`
  width: 60%;
  margin:0 auto;
  @media(max-width: 768px){ width: 100%; }
`;
const ExpertiseTitle = styled.h2`
  text-align: center;
`;
const ExpertisePerks = styled.div`
  background: lightblue;
  margin-top: 15px;
  text-align: center;
  li{ list-style: none; line-height: 30px; font-weight: 700;}
  li:not(:first-child){ border-top: 1px solid black; }
`;
// styles-end
const GuideDetails = (props) => {
  const [thisGuide, setThisGuide] = useState(null)

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

  //eslint-disable-next-line
  }, []);

  if(thisGuide){
  return (
    <Wrapper>
      <BackButton>Back</BackButton>
      <Grid>
        <GridLeft>
          <GridImage src={thisGuide.img} />
          <GridGuideName>{thisGuide.name}</GridGuideName>
          <i className="fa fa-phone"></i> <a href={`tel:+${thisGuide.phone}`}>{thisGuide.phone}</a>
        </GridLeft>

        <GridRight>
          <GridRightTextContainer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ex! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vero quisquam blanditiis voluptas ut deserunt impedit libero ipsa perspiciatis, minus quis dicta, harum reprehenderit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti quas quia beatae totam ipsum?
          </GridRightTextContainer>
        </GridRight>
      </Grid>

      <Separator/>

      <ExpertiseGrid>
        <ExpertiseTitle>Expertise</ExpertiseTitle>
        <ExpertisePerks>{thisGuide.expertise.map((perk,id) => <li key={id}>{perk}</li>)}</ExpertisePerks>
      </ExpertiseGrid>
    
    </Wrapper>
  )

  } else {
    return (<Wrapper>
      <div style={{height: "100vh"}}></div>
      </Wrapper>)
  }
}

export default GuideDetails
