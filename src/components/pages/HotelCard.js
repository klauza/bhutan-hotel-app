import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HotelCard = ({hotel}) => {

  return (
    <Row className="hotel-card justify-content-center" id={`card-${hotel.id}`}>
      <Col>
        <Card style={{ width: '300px' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body className="card-details">
            <Card.Title>{hotel.name}</Card.Title>
              <p>Bedrooms: {hotel.bedrooms}</p>
              <p>Bathrooms: {hotel.bathrooms}</p>
              <p>Price: {hotel.price}</p>
            <Button variant="primary">Check hotel</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      
  )
}

export default HotelCard
