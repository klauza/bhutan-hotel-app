import React from 'react';
import styled from 'styled-components';
import MapContact from './Contact-children/MapContact';
import { Wrapper } from '../layout/Elements';

// PAGE STYLES
const Header = styled.h1`
  text-align: center;
  font-family: Verdana;
  color: green;
  font-weight: bold;
  margin-top: 50px;
`;
const Paragraph = styled.p`
  text-align: center;
  width: 50%;
  margin: 0px auto 50px auto; 
  font-style: italic; font-weight: 500;
  color: green;
`;
const FlexLayout = styled.div`
  display: flex;
  min-height: 500px;
  margin-bottom: 150px;
  @media(max-width: 768px){flex-direction: column; }
`;
const MapHeader = styled.p`
  background: black;
  color: white;
  margin: 0;
  padding: 5px 0;
`;
const Left = styled.div`
  flex: 6;
  text-align: center;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
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
      <Paragraph>We always help. We love to help.</Paragraph>
      
      <FlexLayout>

        <Left>
          <MapHeader>Trouble with finding our facility? Use our map.</MapHeader>
          <div className="map" style={{backgroundColor: "lightblue", height: "600px"}}>

            <MapContact/>
          
          </div>
        </Left>

        <Right>
          <p>Need immediate help?</p>
          <p>Got a question?</p>
          <div><i className="fa fa-phone" style={{fontSize: "1.6rem"}}></i> <strong>02422515431</strong> - 24h open line</div>
        </Right>

      </FlexLayout>

    </Wrapper>
  )


}

export default Contact
