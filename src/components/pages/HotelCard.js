import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HotelCard = ({hotel}) => {

  return (
    <div>
    <Row className="justify-content-center">
      <Col xs={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{hotel.name}</Card.Title>
              <p>Bedrooms: {hotel.bedrooms}</p>
              <p>Bathrooms: {hotel.bathrooms}</p>
              <p>Price: {hotel.price}</p>
            <Button variant="primary">Check hotel</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      
    </div>
  )
}

export default HotelCard
