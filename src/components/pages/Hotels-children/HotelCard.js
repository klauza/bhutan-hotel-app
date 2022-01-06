import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HotelImage from './HotelImage';
import styled from 'styled-components';
import { Button } from '../../layout/Elements';

const Gradient = styled.div`
  height: 100%;
  position: relative;
  &:before,
  &:after {
    content: '';
    display: block;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:before {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &:after {
    left: auto;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
  opacity: 0;
`;
const Col = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  width: 300px;
  border: 0px solid grey;
  box-sizing: content-box;
  @media (max-width: 768px) {
    transform: scale(1);
    margin-bottom: 100px;
  }
`;
const CardsSlider = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const CardsBody = styled.div`
  position: relative;

  box-shadow: 0px 2px 3px 1px rgba(97, 97, 97, 0.55);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  z-index: 3;
`;
const CardBodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: -60px;
  transform: translateY(-50%);
  text-align: right;
  font-size: 1.5em;

  p {
    position: relative;
    width: 50px;
  }
  p:hover {
    cursor: default;
  }
  @media (max-width: 768px) {
    top: 150%;
    left: 0;
  }
`;
const CardBodyMid = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  span {
    background: rgba(0, 0, 0, 0.65);
    color: white;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
  button {
    margin-bottom: 15px;
  }
  a > button {
    background: green;
    color: white;
    width: 120px;
    &:hover {
      background: rgb(0, 112, 0);
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;
const CardBodyRight = styled.div`
  position: absolute;
  top: 40%;
  right: -85px;
  transform: translateY(-50%);
  font-size: 1.5em;
  p {
    position: relative;
    left: 10px;
  }
  p:hover {
    cursor: default;
  }
  @media (max-width: 768px) {
    top: 150%;
    right: 15px;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-top: -23px;
  margin-bottom: 35px;
`;
const Indicator = styled.button`
  border: 2px solid blue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 2.2em;
  transition: box-shadow 200ms ease, border 200ms ease;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
  background: white;
  &:active {
    border: 2px solid black;
    outline: 0;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
    transition: box-shadow 200ms ease, border 200ms ease;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background: #d4d4d4;
    border: 2px solid gray;
  }
`;
const IndicatorLeft = styled(Indicator)`
  text-indent: -4px;
`;
const IndicatorRight = styled(Indicator)`
  text-indent: 0.5px;
`;
// style-end

const HotelCard = ({ hotel, saveRoomLoc }) => {
  useEffect(() => {
    document.querySelectorAll('.hide-show').forEach((each) => {
      each.style.transition = 'all 500ms ease';
      each.style.opacity = '1';
    });
  }, []);

  const [image, setImage] = useState(hotel.img[0]);

  const nextImage = () => {
    let currentIndex = hotel.img.indexOf(image);
    const newIndex = currentIndex + 1;
    setImage(hotel.img[newIndex]);
  };
  const prevImage = () => {
    let currentIndex = hotel.img.indexOf(image);
    const newIndex = currentIndex - 1;
    setImage(hotel.img[newIndex]);
  };

  return (
    <Fragment>
      <Gradient>
        <Row
          id={`card-${hotel.id}`}
          style={{ opacity: '0' }}
          className="hide-show"
        >
          <Col>
            <Card>
              <CardsSlider
                className={`active-slide-${hotel.img.indexOf(image)}`}
              >
                <SliderWrapper
                  style={{
                    transform: `translateX(-${
                      hotel.img.indexOf(image) * 100
                    }%)`,
                  }}
                >
                  {hotel.img.map((img, index) => (
                    <HotelImage
                      key={img.toString()}
                      image={img}
                      hotel={hotel}
                      id={index}
                    />
                  ))}
                </SliderWrapper>
              </CardsSlider>

              <CardsBody>
                <CardBodyLeft>
                  <p>
                    {hotel.bedrooms} <i className="fa fa-bed"></i>
                  </p>
                  <br />
                  <p>
                    {hotel.bathrooms} <i className="fa fa-bath"></i>
                  </p>
                </CardBodyLeft>

                <CardBodyMid>
                  <Indicators>
                    <IndicatorLeft
                      onClick={prevImage}
                      disabled={hotel.img.indexOf(image) === 0}
                    >
                      <i className="fa fa-angle-left"></i>
                    </IndicatorLeft>
                    <IndicatorRight
                      onClick={nextImage}
                      disabled={
                        hotel.img.indexOf(image) === hotel.img.length - 1
                      }
                    >
                      <i className="fa fa-angle-right"></i>
                    </IndicatorRight>
                  </Indicators>

                  <span>{hotel.name}</span>
                  <Link
                    onClick={() => saveRoomLoc()}
                    to={{
                      pathname: `/apartment/${hotel.id}`,
                      state: { hotel },
                    }}
                  >
                    <Button>Check hotel</Button>
                  </Link>
                </CardBodyMid>

                <CardBodyRight>
                  <div>
                    <p>
                      <i className="fa fa-smile-o"></i> {hotel.rating}
                    </p>
                    <br />
                    <p>
                      <i className="fa fa-money"></i>
                      <span style={{ textIndent: '3px' }}> {hotel.price}</span>
                    </p>
                  </div>
                </CardBodyRight>
              </CardsBody>
            </Card>
          </Col>
        </Row>
      </Gradient>
      <hr />
    </Fragment>
  );
};

export default HotelCard;
