import React, {Fragment, useState} from 'react'
import GuideList from './Guide-children/GuideList';
import guidesData from './Guide-children/GuideData';
import styled from 'styled-components';

// STYLES
const AboutPage = styled.div`
  width: 100%;
  margin: 50px auto;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  min-height: 200px;
  display: grid;
  align-content: center;
  padding: 15px;
  p{
    margin: 10px 0;
  }
  p{
    font-weight: 700;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  // const [change, setDisplay] = useState(true);

  return (
    <Fragment>
      <AboutPage>
        <p>Hire a guide and let him lead your adventure to a higher level of exploration.</p>
        <p>Our guides have huge knowledge about local events and places with spectacular views.</p>
      </AboutPage>
      <Grid>
        {guides.map((guide, id) => <GuideList id={id} key={id} guide={guide} /> )}
      </Grid>

    </Fragment>
  )
}

export default Guides
