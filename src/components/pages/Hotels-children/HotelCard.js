import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotelImage from './HotelImage';


const HotelCard = ({hotel}) => {
  
  const [image, setImage] = useState(hotel.img[0]);

  const nextImage = () => {
    let currentIndex = hotel.img.indexOf(image);
    const newIndex = currentIndex+1;
    setImage(hotel.img[newIndex]);
  }
  const prevImage = () => {
    let currentIndex = hotel.img.indexOf(image);
    const newIndex = currentIndex-1;
    setImage(hotel.img[newIndex]);
  }


  return (

    <Fragment>
    <div className="gradient-opacity">
    <Row className="hotel-card justify-content-center" id={`card-${hotel.id}`} style={margins}>
      <Col className="d-flex justify-content-center">
        <Card style={{ width: '300px' }}>

            <div className={`cards-slider active-slide-${hotel.img.indexOf(image)}`}>
              <div className="cards-slider-wrapper" style={{"transform": `translateX(-${hotel.img.indexOf(image)*100}%)`}}>
              {
                
                hotel.img.map((img, index) => <HotelImage key={img.toString()} image={img} hotel={hotel} id={index}/>  )
              }

              </div>
            </div>
      
          <Card.Body className="card-details" style={{"zIndex": "3"}}>
            {/* <div className="card-details__container"> */}

              <div className="card-details__left">
                {hotel.extras.map(extra => <p> {extra}</p> )}
                
              </div>

              <div className="card-details__middle">
                <div>
                  <button onClick={prevImage} disabled={hotel.img.indexOf(image) === 0}>prev</button>
                  <button onClick={nextImage} disabled={hotel.img.indexOf(image) === hotel.img.length-1}>next</button>
                </div>
                
                <Card.Title>{hotel.name}</Card.Title>
                <Link to={{
                  pathname: `/hotel/${hotel.id}`,
                  state: {hotel}
                  }} >
                  <Button variant="primary" >Check hotel</Button>
                </Link>
              </div>

              <div className="card-details__right">
                <div>
                  <p>Bedrooms: {hotel.bedrooms}</p>
                  <p>Bathrooms: {hotel.bathrooms}</p>
                  <p>Price: {hotel.price}</p>
                </div>
              </div>

            {/* </div> */}

              
          </Card.Body>
         
        </Card>
        
      </Col>
    </Row>
    </div> 
                  <hr/>

      </Fragment>
  )
}
const margins = {
  "margin": "50px 0px"
}
export default HotelCard
