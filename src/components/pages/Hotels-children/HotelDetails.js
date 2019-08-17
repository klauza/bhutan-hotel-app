import React from 'react';
import Button from 'react-bootstrap/Button';

const HotelDetails = (props) => {
  const { hotel } = props.location.state
    

    return(
    <div>
      HOTEL DETAILS HERE
      hotel nr: {hotel.id}
      
      <Button variant="primary" >Make a reservation</Button>
    </div>
  )
}

export default HotelDetails
