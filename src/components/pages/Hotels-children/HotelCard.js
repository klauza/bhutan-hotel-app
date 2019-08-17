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
            <Card.Title>{hotel.name}</Card.Title>
              <p>Bedrooms: {hotel.bedrooms}</p>
              <p>Bathrooms: {hotel.bathrooms}</p>
              <p>Price: {hotel.price}</p>
            
              

              <Link to={{
                pathname: `/hotel/${hotel.id}`,
                state: {hotel}
                }} >
                <Button variant="primary" >Check hotel</Button>
              </Link>
              
           
            <div>
              <button onClick={prevImage} disabled={hotel.img.indexOf(image) === 0}>prev</button>
              <button onClick={nextImage} disabled={hotel.img.indexOf(image) === hotel.img.length-1}>next</button>
            </div>
          </Card.Body>
         
        </Card>
        
      </Col>
    </Row>
    </div> 


      </Fragment>
  )
}
const margins = {
  "margin": "50px 0px"
}
export default HotelCard
