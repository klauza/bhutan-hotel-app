import React, {useState} from 'react'
import GuideList from './Guide-children/GuideList';
import guidesData from './Guide-children/GuideData';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';

// STYLES
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 50px 0px;
  grid-gap: 5px;

  @media(max-width: 768px){
    grid-template-columns: 1fr 1fr;
    grid-gap: 3px;
  }
`;
const GuidesTopText = styled.div`
  width: 60%; height: auto;
  margin: 50px auto 0 auto;
  display: flex; flex-direction: column;
  justify-content: start;
  text-align: center;
  border: 2px solid black; border-radius: 3px;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
  p:nth-child(1){
    background: black;
    color: white;
    font-size: 1.15em;
    font-weight: 700;
    padding: 15px;
  }
  p:nth-child(2){
    background: grey;
    color: white;
    font-size: 1.15em;
    padding: 15px;
  }
`;
// end-styles


const Guides = () => {

  const [guides] = useState(guidesData);

  return (
    <Wrapper overflow="hidden">
      <GuidesTopText>
        <p>Rent a guide and let him lead your adventure to a higher level of exploration.</p>
        <p>Our guides have huge knowledge of locale events and places with awesome views.</p>
      </GuidesTopText>

      <Grid>
        {guides.map((guide, id) => <GuideList id={id} key={id} guide={guide} /> )}
      </Grid>
    </Wrapper>
  )
}

export default Guides
