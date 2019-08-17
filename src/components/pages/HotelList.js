import React, {Fragment} from 'react'
import data from './HotelsData';
import HotelCard from './HotelCard';

const HotelList = () => {

  // const [hotel, setHotel] = useState(data.hotels[0]);

  

  return (
    <Fragment>
    
      <div className="gradient-opacity">
        {
          data.hotels.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
        }
      </div> 
      
    </Fragment>
  )
}


export default HotelList
