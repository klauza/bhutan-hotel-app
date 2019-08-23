import React from 'react';
import styled from 'styled-components';
import MapContact from './MapContact';
import Wrapper from '../layout/Wrapper';

// PAGE STYLES
const Header = styled.h1`
  text-align: center;
  font-family: Verdana;
  color: green;
  font-weight: bold;
`;
const Paragraph = styled.p`
  text-align: center;
  width: 50%;
  margin: 50px auto;
  font-style: italic; font-weight: 500;
`;
const FlexLayout = styled.div`
  display: flex;
  min-height: 500px;
  @media(max-width: 768px){flex-direction: column; }
`;
const MapHeader = styled.p`
  background: black;
  color: white;
  margin: 0;
  padding: 5px 0;
`;
const Left = styled.div`
  flex: 4;
  text-align: center;
  @media(max-width: 768px){order: 2;}
`;
const Right = styled.div`
  flex: 2;
  text-align: left;
  align-self: center;
  padding: 15px;
  p{margin: 5px 0;}
  @media(max-width: 768px){order: 1; text-align: center;}
  
`;

const Contact = () => {



  return (
    <Wrapper>
      <Header>CONTACT</Header>
      <Paragraph>We always help.</Paragraph>
      
      <FlexLayout>

        <Left>
          <MapHeader>Trouble with finding our facility?</MapHeader>
          <div className="map" style={{backgroundColor: "lightblue", height: "600px"}}>

            <MapContact/>
          
          </div>
        </Left>

        <Right>
          <p>Need help immediately?</p>
          <p>Got a question?</p>
          <div><i className="fa fa-phone" style={{fontSize: "1.6rem"}}></i> <strong>02422515431</strong> - 24h monday-friday</div>
        </Right>

      </FlexLayout>

    </Wrapper>
  )


}

export default Contact
