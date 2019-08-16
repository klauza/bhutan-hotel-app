import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MainCarrousel = () => {

  const imgs = [
    "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2129814/pexels-photo-2129814.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  ]

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel interval={2000} activeIndex={index} direction={direction} onSelect={handleSelect} style={{"height": "400px"}}>
      <Carousel.Item style={{"height": "400px", "width": "100%"}}>
        <img
          style={imageAlign}
          className="d-block w-100"
          src={imgs[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{"height": "400px"}}>
        <img
          style={imageAlign}
          className="d-block w-100"
          src={imgs[1]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{"height": "400px"}}>
        <img
          style={imageAlign}
          className="d-block w-100"
          src={imgs[2]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const imageAlign = {
  "width:": "100%",
  "height": "100%",
  "objectFit": "cover"
}

export default MainCarrousel
