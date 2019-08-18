import React, {Fragment} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainCards = () => {
  
  const imgs = [
    "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2129814/pexels-photo-2129814.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ]

  const imageStyle={
    "width": "100px",
    "height": "100px",
    "margin": "0 auto",
    "border": "0",
    "borderRadius": "50%",
    "position": "absolute",
    "top": "-50px", "left": "50%", "transform":"translateX(-50%)"
  }
  const marginTop75={
    "marginTop": "75px"
  }
  // const marginTop150={
  //   "marginTop": "150px"
  // }

  return (
    <Fragment>
      <Row>

        <Col xs={12} md={4} style={marginTop75}>
          <Card style={{ width: '100%', textAlign: "center" }}>
            <Card.Img variant="top" src={imgs[0]} style={imageStyle} />
            <Card.Body>
              <Card.Title style={marginTop75}>Trust</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} style={marginTop75}>
          <Card style={{ width: '100%', textAlign: "center" }}>
            <Card.Img variant="top" src={imgs[1]} style={imageStyle} />
            <Card.Body>
              <Card.Title style={marginTop75}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} style={marginTop75}>
          <Card style={{ width: '100%', textAlign: "center" }}>
            <Card.Img variant="top" src={imgs[2]} style={imageStyle} />
            <Card.Body>
              <Card.Title style={marginTop75}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Fragment>
  )
}

export default MainCards
