import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import data from './HotelsData';
import ThumbnailGallery from './HotelDetails-gallery/ThumbnailGallery';
import styled from 'styled-components';
import {Wrapper} from '../../layout/Elements';
const history = createBrowserHistory();

// STYLES
const Header = styled.h2`
  width: 100%;
  text-align: center;
  &:after{
    content:'';
    display: block;
    width: 100%; height: 5px;
    background: purple;
  }
`;
const Button = styled.button`
  position: absolute;
  right: 30px;
  width: 60px; height: 60px;
  border: 0; border-radius: 50%;
  :active, :focus{outline: 0;}
  :active{border: 1px solid red;}
`;
const ReservationButton = styled(Button)`
  bottom: 140px; 
  background: red;
`;
const BackButton = styled(Button)`
  bottom: 80px;
  background: darkcyan;
`;
// styles-end

const HotelDetails = (props) => {
  const [thisHotel, setThisHotel] = useState(null)
  const [reloadBtn, setReloadBtn] = useState(false);
  
  useEffect(() =>{
    try{
      var { hotel } = props.location.state;
      setThisHotel(hotel);
    } catch(err){ 
      console.log('error'); 
    }

    if(!hotel){
      const hotelId = props.match.params.id;
      const hotelUrl = data.hotels[hotelId];
      setThisHotel(hotelUrl);
      setReloadBtn(true)
    }
  }, [thisHotel, props.match.params.id, props.location.state])

  // Buttons functions
  const goBackReload = () => {
    history.push('/hotel-list')
    window.location.reload(true);
  }
  const goBackFunction = () => {
    history.goBack();
  }


  if(thisHotel){
    return(
      <Wrapper>
        <Header>{thisHotel.name.toUpperCase()}</Header>

        <ThumbnailGallery features={thisHotel.features} images={thisHotel.img} />


        <Link to={{
          pathname: `/reservation`,
          state: {thisHotel}
          }} >
          <ReservationButton>Make a reservation</ReservationButton>
        </Link>
        {reloadBtn 
          ? 
          <BackButton onClick={goBackReload}>Back</BackButton>
          : 
          <BackButton onClick={goBackFunction}>Back</BackButton>
        }
        
      </Wrapper>
    )

  } else {
    return(<div></div>)
  }
}

export default HotelDetails
