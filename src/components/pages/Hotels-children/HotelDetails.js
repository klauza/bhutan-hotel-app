import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const HotelDetails = (props) => {
  const { hotel } = props.location.state
    

    return(
    <div>
      HOTEL DETAILS HERE
      hotel nr: {hotel.id}
      

      <Link to={{
        pathname: `/reservation`,
        state: {hotel}
        }} >
        <Button variant="primary" >Make a reservation</Button>
      </Link>

      
    </div>
  )
}

export default HotelDetails
