import React, {Fragment} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import MainCarrousel from './Main-children/MainCarrousel';
import MainCards from './Main-children/MainCards';
import Button from 'react-bootstrap/Button';

const Main = () => {
  return (
    <Fragment>
      <MainCarrousel/>

      <Jumbotron fluid style={{"margin": "100px 0", "textAlign": "center"}}>
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

      <Container className="d-flex" style={{"margin": "150px auto"}}>
        <div className="row">

          <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-center m-0">Would you like to speed up your exploration?</h3>
            <h1 className="text-center m-0 line-beneath mt-2">Rent a car!</h1>
            <Button variant="success mb-2">Check deals</Button>
          </div>

          <div className="col-md-6 col-12 p-0">
            <img className="img-fluid" src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
          </div>

        </div>
      </Container>

    </Fragment>
  )
}

export default Main
