import React from 'react'

const HotelReservation = (props) => {
 
  try{
    var { hotel } = props.location.state;
  } catch(err){
    console.log(err);
  }
  
  if(hotel){
    return (
      <div>
        MAP <br/>
        hotel reservation page <br/>
        You are going to make a reservation on {hotel.name}
      </div>
    )
  } else {
    return ( <div>No hotel chosen</div>)
  }
}

export default HotelReservation
