import React from 'react';
import NotFoundImage from '../../media/not-found.png';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  @media(max-width: 768px){ width: 95%; }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  margin-top: 50px;
`;
const Col = styled.div`
  width: 40%;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
// end-styles
const NotFound = () => {
  return (

    <Wrapper>
      <Row>
        <Col>
          <Image src={NotFoundImage} />
          <p style={{textAlign: "center", fontSize:"2em", fontWeight:"700"}}>Page not found</p>
        </Col>
      </Row>
    </Wrapper>

  )
}

export default NotFound
