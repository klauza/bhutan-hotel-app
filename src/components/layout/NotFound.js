import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import NotFoundImage from '../../media/not-found.png';

const NotFound = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column mx-auto justify-content-center mt-5">
          <Image src={NotFoundImage} rounded className="col-5 d-block mx-auto"/>
          <p className="text-center mt-3" style={{"fontSize":"2em", "fontWeight":"700"}}>Page not found</p>
        </Col>
      </Row>
    </div>
  )
}

export default NotFound
