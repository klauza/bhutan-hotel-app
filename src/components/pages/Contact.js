import React from 'react';
import styled from 'styled-components';
import MapContact from './Contact-children/MapContact';
import { Wrapper } from '../layout/Elements';

// PAGE STYLES
const HeadBar = styled.div`
  margin: 100px auto;
  height: auto;
  width: 70%;
  border: 0; border-top-left-radius: 5px; border-top-right-radius: 5px;
  background: lightcyan;
`;
const HeadTitle = styled.div`
  display: flex; flex-direction: row;
`;
const TitleMain = styled.h1`
 flex: 1;
 font-size: 3em;
 align-self: center;
 &::after{
   content: '';
   background: black;
   height: 35px;
   width: 3px;
   display: inline-block;
   margin-left: 25px;
 }
`;
const TitleBody = styled.div`
  flex: 1;
`;
const HeadHelp = styled.div`
  text-align: center;
`;
// ---------------------- //

const FlexLayout = styled.div`
  display: flex; flex-direction: column;
  min-height: 500px;
  margin-bottom: 100px;
  @media(max-width: 768px){flex-direction: column; }
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
`;
const MapHeader = styled.p`
  text-align: center;
  background: black;
  color: white;
  margin: 0;
  padding: 5px 0;
`;
// styles-end

const Contact = () => {



  return (
    <Wrapper>
      <HeadBar>

        <HeadTitle>
          <TitleMain>CONTACT</TitleMain>
          
          <TitleBody>
            <p>Need immediate help?</p>
            <p>Got a question?</p>
            <div><i className="fa fa-phone" style={{fontSize: "1.6rem"}}></i> <strong>02422515431</strong> - 24h open line</div>
          </TitleBody>
        </HeadTitle>
      
        <HeadHelp>
          <div>
            We can always help
          </div>
          <div>
            We love to help
          </div>
        </HeadHelp>

      </HeadBar>


      <FlexLayout>
          <MapHeader>Trouble with finding our facility? Use our map.</MapHeader>
          <div className="map" style={{backgroundColor: "lightblue", height: "600px"}}>

            <MapContact/>
          
          </div>
      </FlexLayout>

    </Wrapper>
  )


}

export default Contact
