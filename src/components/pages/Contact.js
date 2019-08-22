import React from 'react';
import styled from 'styled-components';
import MapContact from './MapContact';

// PAGE STYLES
const Header = styled.h1`
  text-align: center;
  font-family: Verdana;
  color: green;
  font-weight: bold;
`;
const Paragraph = styled.p`
  text-align: justify;
  width: 50%;
  margin: 15px auto;
`;


const Contact = () => {



  return (
    <div style={{width: "70%", margin: "50px auto"}}>
      <Header>CONTACT</Header>
      <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dicta fuga architecto suscipit similique enim.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid mollitia numquam tempore facilis accusamus, necessitatibus nihil accusantium est. Praesentium.</Paragraph>
      
      <div style={{display: "flex", minHeight: "500px"}}>
        <div style={{flex: "1", textAlign: "center"}}>
          <p style={{backgroundColor: "grey", margin: "0"}}>Trouble with finding our facility?</p>
          <div className="map" style={{backgroundColor: "lightblue", height: "600px"}}>

            <MapContact/>
          
          </div>
        </div>
        <div style={{flex: "1", textAlign: "center", alignSelf: "center"}}>
          <p>Need help immediately?</p>
          <p>Got a question?</p>
          <div>[tel icon] - 02422515431 - 24h green status</div>
        </div>
      </div>

    </div>
  )


}

export default Contact
