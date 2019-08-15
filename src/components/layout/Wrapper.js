import React from 'react';
import {Container} from 'react-bootstrap';

const Wrapper = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Wrapper
