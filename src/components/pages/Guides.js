import React, {useState} from 'react'
import GuideList from './Guide-children/GuideList';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import guidesData from './Guide-children/GuideData';


const Guides = () => {

  const [guides] = useState(guidesData);

  return (
    <Container>
      <p className="text-center">Rent a guide and let him lead your adventure to a higher level of exploration.</p>
      <p className="text-center">Our guides have huge knowledge of locale events and awesome views.</p>
      <Row style={{"margin": "50px 0px"}}>
        {guides.map((guide, id) => <GuideList id={id} key={id} guide={guide} /> )}
      </Row>
    </Container>
  )
}

export default Guides
