import React from 'react';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


const HotelReservation = (props) => {
 
  try{
    var { thisHotel } = props.location.state;
  } catch(err){
    console.log(err);
  }

  const goBackFunction = () => {
    history.goBack();
  }
  const goHome = () => {
    history.push('/hotel-list')
    window.location.reload(true);
  }
  
  if(thisHotel ){
    return (
      <div>
        MAP <br/>
        hotel reservation page <br/>
        You are going to make a reservation on {thisHotel.name}
        <button onClick={goBackFunction}>Back</button>
      </div>
    )
  } else {
    return ( <div>
      <p>No hotel chosen</p>
      <button onClick={goHome}>Back to hotel list</button>
      </div>)
  }
}

export default HotelReservation
