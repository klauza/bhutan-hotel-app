import React, {Fragment, useState} from 'react'
import data from './HotelsData';
import HotelCard from './HotelCard';
import Container from 'react-bootstrap/Container';

const HotelList = () => {

  const [hotel, setHotel] = useState(data.hotels[0]);

  
  const nextImage = () => {
    
    const newIndex = hotel.id+1;
    setHotel(data.hotels[newIndex]);
  }
  const prevImage = () => {
    const newIndex = hotel.id-1;
    setHotel(data.hotels[newIndex]);
  }
  return (
    <Fragment>
      <Container>
        <div>
          <button onClick={prevImage} disabled={hotel.id === 0}>prev</button>
          <button onClick={nextImage} disabled={hotel.id === data.hotels.length-1}>next</button>
        </div>
      </Container>

      <div className="gradient-opacity">
        <div className={`cards-slider active-slide-${hotel.id}`}>
          <div className="cards-slider-wrapper justify-content-center" style={{"transform": `translateX(-${hotel.id*(100/data.hotels.length)}%)`}}>
            {
            data.hotels.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
            }
          </div>
        </div>
      </div>
      
    </Fragment>
  )
}


export default HotelList
