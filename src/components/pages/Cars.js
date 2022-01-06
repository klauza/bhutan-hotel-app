import React, { Fragment, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setCar } from '../../actions/reservationActions';
import { setAlert } from '../../actions/alertActions';
import styled from 'styled-components';
import { Loader } from '../layout/Elements';

import carsData from './Cars-children/carsData';

// STYLES
const AboutPage = styled.div`
  width: 100%;
  margin: 50px auto;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  min-height: 200px;
  display: grid;
  align-content: center;
  padding: 15px;
  p {
    margin: 10px 0;
  }
  p {
    font-weight: 700;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
const CarBlock = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px;
  background: lightgrey;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const DescContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  /* display: grid;
  align-content: center; */
`;
const DescMark = styled.div`
  text-align: center;
  display: block;
  font-size: 2em;
  letter-spacing: 10px;
  text-indent: 5px;
  margin: 20px 0;

  border-bottom: 1px solid black;
  border-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    lightgrey,
    black,
    lightgrey,
    rgba(0, 0, 0, 0)
  );
  border-image-slice: 5;
`;
const DescAbout = styled.div`
  margin: 25px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, 1fr);
  align-items: center;
`;
const DescRent = styled.button`
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  background: #f08080;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: all ease 225ms;
  letter-spacing: 2px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    box-shadow: unset;
    transition: all ease 250ms;
    background: #ff9999;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InternalWrap = styled.div`
  opacity: 0;
  transform: translateY(200px);
`;

// styles-end

const Cars = ({ setCar, setAlert, reservation }) => {
  const [cars] = useState(carsData);
  const [loader, setLoader] = useState(true);

  const entryAnimation = useRef();

  useEffect(() => {
    // load all car images
    let images = [];
    cars.forEach((car) => images.push(car.img));

    const checkImage = (path) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ path, status: 'ok' });
        img.onerror = () => resolve({ path, status: 'error' });

        img.src = path;
      });

    const loadImg = (images) =>
      Promise.all(images.map((img) => checkImage(img)));

    loadImg(images)
      .then(() => setLoader(false))
      .then(() => {
        if (!loader) {
          entryAnimation.current.style.transition = 'all 550ms ease';
          entryAnimation.current.style.transform = 'translateY(0px)';
          entryAnimation.current.style.opacity = '1';
        }
      })
      .catch((reason) => console.log(reason));

    //eslint-disable-next-line
  }, [loader, entryAnimation]);

  const makeCarReservation = (car) => {
    // if already made a reservation, show alert
    if (reservation.apartment === null) {
      setAlert('You must make an apartment reservation at first', 'red', 3000);
    } else {
      if (reservation.car !== null) {
        setAlert('You already made a car reservation', 'yellow', 3000);
      } else {
        setAlert('You have successfully rented a car', 'green');
        setCar(car);
      }
    }
  };

  return (
    <Fragment>
      {/* <BackButton>Back</BackButton> */}

      {!loader ? (
        <Fragment>
          <AboutPage>
            <p>Car comes with full fuel tank and so must be returned with.</p>
            <p>Car prices refer to 1 day usage.</p>
            <p>
              To rent a vehicle you must make an apartment reservation first.
            </p>
            <p>Administrative charge is 69.</p>
          </AboutPage>
          <InternalWrap ref={entryAnimation}>
            {cars.map((car, i) => {
              return (
                <CarBlock key={i}>
                  <DescContainer>
                    <DescMark>{car.mark.toUpperCase()}</DescMark>

                    <DescAbout>
                      <div>
                        type: <strong>{car.type.toUpperCase()}</strong>
                      </div>
                      <div>
                        engine: <strong>{car.engine}</strong>
                      </div>
                      <div>
                        price: <strong>{car.price}</strong>
                      </div>
                      <div>
                        avg mpg: <strong>{car.mpg}</strong>
                      </div>
                    </DescAbout>
                    <DescRent onClick={() => makeCarReservation(car)}>
                      Rent
                    </DescRent>
                  </DescContainer>

                  <ImageContainer>
                    <CarImage src={car.img} />
                  </ImageContainer>
                </CarBlock>
              );
            })}
          </InternalWrap>
        </Fragment>
      ) : (
        <div style={{ minHeight: '100vh' }}>
          <Loader></Loader>
        </div>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  reservation: state.reservation,
});
export default connect(mapStateToProps, { setCar, setAlert })(Cars);
