import React, {useState, useEffect} from 'react';
import { createBrowserHistory } from 'history';
import data from './HotelsData';
import ThumbnailGallery from './HotelDetails-gallery/ThumbnailGallery';
import styled from 'styled-components';
import {Wrapper} from '../../layout/Elements';
import {Link} from 'react-router-dom';
const history = createBrowserHistory();

// STYLES
const Header = styled.h2`
  width: 100%;
  text-align: center;
  display: flex; flex-direction: row; justify-content: center;
  letter-spacing: 4px;
  &::before, &::after{
    content:'';
    display: inline-block;
    width: 50px; height: 1px;
    margin: 0 20px;
    background: rgba(0,0,0,0.35);
    align-self: center;
  }
`;

const ReservationButton = styled.button`
  border: 0; border-radius: 3px;
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
  margin: 50px auto 0 auto; 
  display: block;
  background: blue;
  a{
    display: block; width: 100%; height: 100%; padding: 15px 20px; text-decoration: none; color: white; font-size: 1.05rem;
  }
  &:hover{
    cursor: pointer;
    transition: box-shadow 150ms ease;
    box-shadow: 0px 7px 5px -1px rgba(117,117,117,0.65);
  }
`;
const Questions = styled.div`
  text-align: center;
  margin: 15px 0;
`;
const BackButton = styled.button`
  margin: 60px 10px 10px 10px;
  background: lightseagreen;
  border: 0; border-radius: 3px;
  padding: 10px;
  &:hover{
    cursor: pointer;
    background-color: rgb(36, 207, 199);
  }
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
        {reloadBtn 
          ? 
          <BackButton onClick={goBackReload}>Back</BackButton>
          : 
          <BackButton onClick={goBackFunction}>Back</BackButton>
        }

        <Header>{thisHotel.name.toUpperCase()}</Header>

        <ThumbnailGallery features={thisHotel.features} images={thisHotel.img} />

        <ReservationButton>
        <Link to={{
          pathname: `/reservation`,
          state: {thisHotel}
          }} >
          Make a reservation
        </Link>
        </ReservationButton>
        <Questions><p>In case you would have any questions <br/> call: 02329322394</p></Questions>
        
      </Wrapper>
    )

  } else {
    return(<div></div>)
  }
}

export default HotelDetails
