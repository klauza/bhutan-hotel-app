import React, {Fragment} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import MainCarrousel from './Main-children/MainCarrousel';
import MainCards from './Main-children/MainCards';

const Main = () => {
  return (
    <Fragment>
      <MainCarrousel/>

      <Jumbotron fluid style={{"margin": "150px 0", "textAlign": "center"}}>
        <Container>
          <h1>By travellers for travellers</h1>
          <p>
          Once we were travellers too, just like you. Discovering new horizons, <br/>
          broadening knowledge, meeting new interesting people. <br/>
          </p>
          <p><strong>
          Now, we help you achieve even something bigger <br/>
          We help you with finding answers and provide a needed comfort. 
          </strong></p>
        </Container>
      </Jumbotron>
      <Container>
        <MainCards />
      </Container>
    </Fragment>
  )
}

export default Main
