import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCar } from '../../actions/reservationActions';
import { setAlert } from '../../actions/alertActions';
import styled from 'styled-components';
import { Wrapper, BackButton } from '../layout/Elements';

import carsData from './Cars-children/carsData';

// STYLES
const CarBlock = styled.div`
  width: 100%;
  border: 1px solid lightgrey; border-radius: 3px;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px;
  background: lightgrey;

  @media(max-width: 768px){
    grid-template-columns: 1fr;
    text-align: center;
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
  border: 0; border-radius: 3px;
  background: #f08080;
  box-shadow: 0 1px 1px 1px rgba(0,0,0,0.5);
  transition: all ease 225ms;
  letter-spacing: 2px;
  font-weight: 700;
  &:hover{
    cursor: pointer;
    box-shadow: unset;
    transition: all ease 250ms;
    background: #ff9999;
  }
`;
const ImageContainer = styled.div`
  width: 100%; height: 100%;
`;
const CarImage = styled.img`
  width: 100%; height: 100%;
  object-fit: cover;
`;
// styles-end

const Cars = ({setCar, setAlert, reservation}) => {

  const [cars] = useState(carsData);
  const [loader, setLoader] = useState(true);

  useEffect(()=>{

    // load all car images
   let images = [];
   cars.forEach(car => images.push(car.img));


   const checkImage = (path) =>
   new Promise(resolve => {
       const img = new Image();
       img.onload = () => resolve({path, status: 'ok'});
       img.onerror = () => resolve({path, status: 'error'});

       img.src = path;
   });

   const loadImg = (images) => Promise.all(images.map(img => checkImage(img)));

   loadImg(images)
    .then(() => setLoader(false))
    .catch(reason => console.log(reason));


  //eslint-disable-next-line
  } ,[])


  const makeCarReservation = (car) => {
    // if already made a reservation, show alert
    if(reservation.apartment === null){
      setAlert("You must make an apartment reservation at first", "red");
    } else {
        if(reservation.car !== null){
          setAlert("You already made a car reservation", "red", 2000);
      } else {
          setAlert("You have successfully rented a car", "red");
          setCar(car);
      }
    }
  }

  return (
    <Wrapper>
      <BackButton>Back</BackButton>
      {!loader ? (

      cars.map((car, i) => {
        return(
          <CarBlock key={i}>
            <DescContainer>
              <DescMark>{car.mark.toUpperCase()}</DescMark>

              <DescAbout>
                <div>{car.type.toUpperCase()}</div>
                <div>engine: {car.engine}</div>
                <div>price: {car.price}</div>
                <div>avg mpg: {car.mpg}</div>
              </DescAbout>
              <DescRent onClick={() => makeCarReservation(car)}>RENT</DescRent>
            </DescContainer>

            <ImageContainer>
              <CarImage src={car.img} />
            </ImageContainer>
          </CarBlock>
        )
      })
      ) : (
        <div style={{minHeight: "50vh"}}>LOADING</div>
      )

     }


    </Wrapper>
  )
}
const mapStateToProps = (state) => ({
  reservation: state.reservation
})
export default connect(mapStateToProps, {setCar, setAlert})(Cars)
