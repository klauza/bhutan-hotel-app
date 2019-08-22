import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import HotelImage from './HotelImage';
import styled from 'styled-components';

const Gradient = styled.div`
  height: 100%;
  position: relative;
  &:before, &:after{
    content: '';
    display: block;
    width: 50%; height: 100%;
    position: absolute; top: 0; 
    z-index: 2;
    @media(max-width:767px){ display: none; }
  }
  &:before{
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 35%, rgba(255, 255, 255, 0) 100%);
  }
  &:after{
    left: auto;
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1) 35%, rgba(255, 255, 255, 0) 100%);
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
`;
const Col = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  width: 300px;
`;
const CardsSlider = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const CardsBody = styled.div`

`;

const Indicators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-top:-23px;
  margin-bottom: 35px;
`;
const Indicator = styled.button`
  border-radius: 50%;
  border: 2px solid blue;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.75);
  transition: box-shadow 200ms ease, border 200ms ease;
  text-align: center;
  font-size: 2.2em;
  display: grid;
  align-items: center;
  &:active{
   border: 2px solid black;
   outline: 0;
   box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
   transition: box-shadow 200ms ease, border 200ms ease;
  }
  &:focus{
    outline: 0;
  }
`;
const IndicatorLeft = styled(Indicator)`
  text-indent: -4px;
`;
const IndicatorRight = styled(Indicator)`
  text-indent: 0.5px;
`;

// style-end


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
      <Gradient>
        
      <Row id={`card-${hotel.id}`}>
        <Col>
          <Card>

            <CardsSlider className={`active-slide-${hotel.img.indexOf(image)}`}>
              <SliderWrapper className="" style={{"transform": `translateX(-${hotel.img.indexOf(image)*100}%)`}}>
              {
                hotel.img.map((img, index) => <HotelImage key={img.toString()} image={img} hotel={hotel} id={index}/>  )
              }
              </SliderWrapper>
            </CardsSlider>
      

            <CardsBody className="card-details" style={{"zIndex": "3"}}>
              <div className="card-details__left">
                {hotel.extras.map((extra, id) => <p key={id}> {extra}</p> )}
              </div>

                <div className="card-details__middle">

                  <Indicators>
                    <IndicatorLeft onClick={prevImage} disabled={hotel.img.indexOf(image) === 0}><i className="fa fa-angle-left"></i></IndicatorLeft>
                    <IndicatorRight onClick={nextImage} disabled={hotel.img.indexOf(image) === hotel.img.length-1}><i className="fa fa-angle-right"></i></IndicatorRight>
                  </Indicators>
                  
                  <span>{hotel.name}</span>
                  <Link to={{
                    pathname: `/hotel/${hotel.id}`,
                    state: {hotel}
                    }} >
                    <button>Check hotel</button>
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

                
            </CardsBody>
          
          </Card>
          
        </Col>
      </Row>
      </Gradient> 
      <hr/>

    </Fragment>
  )
}






export default HotelCard
