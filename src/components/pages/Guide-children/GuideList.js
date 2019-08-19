import React, {useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const GuideList = ({guide, id}) => {
  

  useEffect(() => {
    
    let person = document.querySelector('.person-'+id);
    let delay = id*65;
    person.style.transition = `all 300ms ease ${delay}ms`;
    person.style.opacity = `1`;
    person.style.transform = `translateY(0px)`;
  })
  
  return (
   

    <Col className={`person-guide person-${id}`} xs={6} md={4} style={{"marginTop": "75px"}}>
        <Card style={{ width: '100%', textAlign: "center" }}>
          <Card.Img variant="top" src={guide.img} style={imageStyle} />
          <Card.Body>
            <Card.Title style={{"marginTop": "50px"}}>{guide.name}</Card.Title>
            <Card.Text>
              Experience: {guide.experience}
            </Card.Text>
            
            <Link to={{
              pathname: `/guide`,
              state: {guide}
              }} >
              <Button variant="primary">Details</Button>
            </Link>
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
