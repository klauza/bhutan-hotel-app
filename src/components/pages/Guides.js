import React, {useState} from 'react'
import GuideList from './Guide-children/GuideList';
import guidesData from './Guide-children/GuideData';
import styled from 'styled-components';

// STYLES
const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media(max-width: 768px){
    width: 95%;
  }
`;
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

// end-styles


const Guides = () => {

  const [guides] = useState(guidesData);

  return (
    <Container>
      <p className="text-center">Rent a guide and let him lead your adventure to a higher level of exploration.</p>
      <p className="text-center">Our guides have huge knowledge of locale events and awesome views.</p>
      <Grid>
        {guides.map((guide, id) => <GuideList id={id} key={id} guide={guide} /> )}
      </Grid>
    </Container>
  )
}

export default Guides
