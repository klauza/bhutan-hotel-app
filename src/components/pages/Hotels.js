import React, {Fragment} from 'react'
import data from './Hotels-children/HotelsData';
import HotelCard from './Hotels-children/HotelCard';

const Hotels = () => {

  // const [hotel, setHotel] = useState(data.hotels[0]);

  

  return (
    <Fragment>
    
      
        {
          data.hotels.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
        }
     
      
    </Fragment>
  )
}


export default Hotels
