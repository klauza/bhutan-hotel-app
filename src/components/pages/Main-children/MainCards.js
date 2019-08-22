import React, {Fragment} from 'react';
import styled from 'styled-components';

// STYLES
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media(max-width: 768px){
    grid-template-columns: 1fr; 
  }
`;
const Column = styled.div`
  margin: 35px 5px;
`;
const Card = styled.div`
  position: relative;
  border: 1px solid grey;
  width: 100%; height: auto;
  text-align: center;
`;
const CardImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: -50px; left: 50%; 
  transform: translateX(-50%);
`;
const CardBody = styled.div`
  text-align: center;
  p:nth-child(1){ margin-top: 75px; }
  p{ color: orange; padding: 10px 15px; }
`;
const Button = styled.button`
margin-bottom: 5px;
  padding: 5px 15px;
  outline: 0;
  border: 0;
  border-radius: 3px;
`;
// end-styles

const MainCards = () => {
  
  const imgs = [
    "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2129814/pexels-photo-2129814.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ];




  return (
    <Fragment>
      <Grid>

        <Column>
          <Card>
            <CardImg src={imgs[0]} />
            <CardBody>
              <p>Trust</p>
              <p>Some quick example text to build on the card title and make up the bulk of
                the card's content. </p>
              <Button>button</Button>
            </CardBody>
          </Card>
        </Column>

        <Column>
          <Card>
            <CardImg src={imgs[1]} />
            <CardBody>
              <p>Trust</p>
              <p>Some quick example text to build on the card title and make up the bulk of
                the card's content. </p>
              <Button>button</Button>
            </CardBody>
          </Card>
        </Column>

        <Column>
          <Card>
            <CardImg src={imgs[2]} />
            <CardBody>
              <p>Trust</p>
              <p>Some quick example text to build on the card title and make up the bulk of
                the card's content. </p>
              <Button>button</Button>
            </CardBody>
          </Card>
        </Column>

        
      </Grid>
    </Fragment>
  )
}

export default MainCards
