import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import data from './HotelsData';
const history = createBrowserHistory();

const HotelDetails = (props) => {
  const [thisHotel, setThisHotel] = useState(null)
 

  useEffect(() =>{
    try{
      var { hotel } = props.location.state;
      console.log(hotel);
      setThisHotel(hotel);
    } catch(err){
      console.log('error');
     
    }

    if(!hotel){
      const hotelId = props.match.params.id;
      const hotelUrl = data.hotels[hotelId];
      setThisHotel(hotelUrl);
      console.log('hotel from !hotel:', hotelUrl);
    }
   

  })

  const goBackFunction = () => {
    history.goBack();
  }
  if(thisHotel){
    return(
      <div>
        <button onClick={goBackFunction}>Back</button>
        HOTEL DETAILS HERE
        hotel nr: {thisHotel.name}
        

        <Link to={{
          pathname: `/reservation`,
          state: {thisHotel}
          }} >
          <Button variant="primary" >Make a reservation</Button>
        </Link>

        
      </div>
    )
  } else {
    return(<div>Loading..... .</div>)
  }
}

export default HotelDetails
