import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import data from './HotelsData';
const history = createBrowserHistory();

const HotelDetails = (props) => {
  const [thisHotel, setThisHotel] = useState(null)
  const [reloadBtn, setReloadBtn] = useState(false);
 

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
      setReloadBtn(true)
    }
   

  })
  const goBackReload = () => {
    history.push('/hotel-list')
    window.location.reload(true);
  }

  const goBackFunction = () => {
    history.goBack();
    // history.push('/hotel-list', { some: 'state' });
    // history.go('/hotel-list')
  }
  if(thisHotel){
    return(
      <div>
        <Link to={{
          pathname: `/reservation`,
          state: {thisHotel}
          }} >
          <Button variant="primary" >Make a reservation</Button>
        </Link>
          
        HOTEL DETAILS HERE
        hotel nr: {thisHotel.name}
        
        {reloadBtn 
          ? 
          <span><strong><button onClick={goBackReload}>Back and reload</button></strong></span> 

          : 
          <button onClick={goBackFunction}>Back normal</button>
        }

        
      </div>
    )
  } else {
    return(<div>Loading..... .</div>)
  }
}

export default HotelDetails
