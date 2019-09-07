import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';

import carsData from './Cars-children/carsData';

// STYLES
const CarImage = styled.img`
  width: 100%; height: 100%;
  object-fit: cover;
`;
// styles-end

const Cars = () => {

  const [cars] = useState(carsData);
  const [loader, setLoader] = useState(true);

  useEffect(()=>{

    // load all car images
   let images = [];
   cars.forEach(car => images.push(car.img));
   console.log(images);


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


  return (
    <Wrapper>

      {!loader ? (

      cars.map((car, i) => {
        return(
          <div key={i}>
            <p>{car.id}</p>
            <p>{car.mark}</p>
            <CarImage src={car.img} />
          </div>
        )
      })
      ) : (
        <div style={{minHeight: "50vh"}}>LOADING</div>
      )

     }


    </Wrapper>
  )
}

export default Cars
