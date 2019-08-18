import React, {Fragment} from 'react'
import data from './Hotels-children/HotelsData';
import HotelCard from './Hotels-children/HotelCard';
import DropdownButton from 'react-bootstrap/DropdownButton'

const Hotels = () => {

  // const [hotel, setHotel] = useState(data.hotels[0]);

  

  return (
    <Fragment>
      <div style={searchBar}>

      </div>
      
      {
        data.hotels.map(hotel =>  <HotelCard key={hotel.id} hotel={hotel}/> )
      }
     
      
    </Fragment>
  )
}
const searchBar = {
  "position": "sticky",
  "top": "0",
  "width": "100%",
  "height": "56px",
  "backgroundColor": "rgba(225,215,255,0.8)",
  "zIndex": "33"
}

export default Hotels
