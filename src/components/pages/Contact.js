import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import MapContact from './Contact-children/MapContact';
import { Wrapper } from '../layout/Elements';

// PAGE STYLES
const HeadBar = styled.div`
  margin: 50px auto 100px;
  height: auto;
  width: 60%; @media(max-width: 768px){ width: 100%; }
  border: 2px solid black; border-top-left-radius: 5px; border-top-right-radius: 5px;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
`;
const HeadTitle = styled.div`
  display: flex; flex-direction: row;  background: green; color: white;
`;
const TitleMain = styled.h1`
  flex: 1;
  font-size: 2.75em;
  text-align: right;
  align-self: center;
  border-right: 1px solid lightgrey;
  margin-right: 10px;
  padding-right: 10px;
  @media(max-width: 768px){ font-size: 2.2em; }
`;
const TitleBody = styled.div`
  flex: 1;
`;
const HeadHelp = styled.div`
  text-align: center;
  padding: 15px 0;
  background: lightgreen;
  font-weight: 700;
`;
// ---------------------- //

const FlexLayout = styled.div`
  display: flex; flex-direction: column;
  min-height: 600px;
  margin-bottom: 100px;
  @media(max-width: 768px){flex-direction: column; }
  position: relative;
`;
const MapHeader = styled.p`
  text-align: center;
  background: black;
  color: white;
  margin: 0;
  padding: 5px 0;
`;
const MapOverlay = styled.div`

  position: absolute;
  z-index: 999;
  top: 0; left: 0;
  background: rgba(0,0,0,0.9);
  width: 100%; min-height: 631px;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
 &::after{
   content: 'Click to use map';
   text-align: center;
   color: white; font-size: 1.6em;
   display: block;
   position: absolute;
   top: 50%; left: 50%; transform: translateX(-50%);
 }
`;
const TheMap = styled.div`
  z-index: 1;
  transition: all 250ms ease;
  opacity :  ${props => props.ishidden ? ("0.5") : ("1")} ;
  pointer-events: ${props => props.ishidden ? ("none") : ("auto")} ;
  touch-action: ${props => props.ishidden ? ("none") : ("auto")} ;
`;

// styles-end

const Contact = () => {

  const [wrapped, setWrapped] = useState(true);

  const runFunction = () => {
    setWrapped(false);
  }

  return (
    <Wrapper>
      <HeadBar>

        <HeadTitle>
          <TitleMain>CONTACT</TitleMain>
          
          <TitleBody>
            <p>Need immediate help?</p>
            <p>Got a question?</p>
            <div><i className="fa fa-phone" style={{fontSize: "1.6rem"}}></i> <strong>02422515431</strong>  </div>
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
        <MapOverlay onClick={runFunction}>
            <MapHeader>Trouble with finding our facility? Use our map.</MapHeader>
            <TheMap ishidden={wrapped} className="map" style={{backgroundColor: "lightblue", height: "600px"}}>

              <MapContact/>

            </TheMap>
      </MapOverlay>
      </FlexLayout>

    </Wrapper>
  )


}

export default Contact
