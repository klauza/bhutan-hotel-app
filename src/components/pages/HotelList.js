import React, {Fragment, useState} from 'react'
import data from './HotelsData';
import HotelCard from './HotelCard';

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
      <div>
        <button onClick={prevImage} disabled={hotel.id === 0}>prev</button>
        <button onClick={nextImage} disabled={hotel.id === data.hotels.length-1}>next</button>
      </div>
      <HotelCard hotel={hotel}/>  
    </Fragment>
  )
}

export default HotelList
