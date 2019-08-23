import React, {Fragment} from 'react';
import styled from 'styled-components';
import {background1, background2, background3} from '../../../media/index';

// STYLES
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media(max-width: 998px){
    grid-template-columns: 1fr; 
  }
`;
const Column = styled.div`
  margin: 35px 5px;
`;
const Card = styled.div`
  border: 1px solid grey;
  width: 100%; min-height: 200px;
  display: flex; flex-direction: row;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);

  @media(max-width: 1471px){ flex-direction: column; }
  @media(max-width: 998px){ flex-direction: row; }
`;
const CardImg = styled.div`
  flex: 2;
  margin: 15px 15px;
  img{
    border: 2px solid white;
    border-radius: 50%;
    width: 125px;
    height: 125px;
    object-fit: cover;
    @media(max-width: 1471px){ display: block; margin: 0 auto; }
    @media(max-width: 998px){ display: unset; margin: 0; }
    @media(max-width: 768px){ width: 100px; height: 100px; }
  }
  
    
  
`;
const CardBody = styled.div`
  flex: 3;
  text-align: center;
  p:nth-child(1){ margin-top: 25px; }
  p{ color: white; font-weight: 500; padding: 10px 15px; }
`;

// end-styles

const MainCards = () => {
  
  const imgs = [
    "https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/37735/trick-dog-trick-malinois-dog-show-trick-37735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ];




  return (
    <Fragment>
      <Grid>

        <Column>
          <Card style={{background: `url(${background1}) no-repeat`, backgroundSize: "cover"}}>
            <CardImg>
              <img src={imgs[0]} alt=""/>  
            </CardImg> 
            <CardBody>
              <p>Trust</p>
              <p>We may assure you, we have no ghosts in the hotel.</p>
            </CardBody>
          </Card>
        </Column>

        <Column>
          <Card style={{background: `url(${background2}) no-repeat`, backgroundSize: "cover"}}>
            <CardImg>
              <img src={imgs[1]} alt=""/>  
            </CardImg>
            <CardBody>
              <p>Hospitality</p>
              <p>It's not what we have, it's what we offer.</p>
            </CardBody>
          </Card>
        </Column>

        <Column>
          <Card style={{background: `url(${background3}) no-repeat`, backgroundSize: "cover"}}>
            <CardImg>
              <img src={imgs[2]} alt=""/>  
            </CardImg>
            <CardBody>
              <p>Sanctuary</p>
              <p>All good hotels tend to lead people to do things they wouldn't necessarily do at home.</p>
            </CardBody>
          </Card>
        </Column>

        
      </Grid>
    </Fragment>
  )
}

export default MainCards
