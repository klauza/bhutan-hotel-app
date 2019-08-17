import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const GuideList = ({guide}) => {
  console.log(guide);
  
  return (
   

    <Col xs={6} md={4} style={{"marginTop": "75px"}}>
        <Card style={{ width: '100%', textAlign: "center" }}>
          <Card.Img variant="top" src={guide.img} style={imageStyle} />
          <Card.Body>
            <Card.Title style={{"marginTop": "50px"}}>{guide.name}</Card.Title>
            <Card.Text>
              Experience: {guide.experience}
            </Card.Text>
            <Button variant="primary">BUTTON</Button>
          </Card.Body>
        </Card>
      </Col>

   
  )
}

const imageStyle={
  "width": "100px",
  "height": "100px",
  "objectFit": "cover",
  "margin": "0 auto",
  "border": "0",
  "borderRadius": "50%",
  "position": "absolute",
  "top": "-50px", "left": "50%", "transform":"translateX(-50%)"
}
export default GuideList
