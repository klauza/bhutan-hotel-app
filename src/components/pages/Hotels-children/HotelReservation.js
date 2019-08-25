import React from 'react';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import {Wrapper, BackButton} from '../../layout/Elements';
const history = createBrowserHistory();


// STYLES
const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`;
const Button = styled.button`
    margin: 60px 10px 10px 10px;
    background: lightseagreen;
    border: 0; border-radius: 3px;
    padding: 10px;
    &:hover{
      cursor: pointer;
      background-color: rgb(36, 207, 199);
    }
`;
const NoHotel = styled.div`
  text-align: center;
`;
// end-styles


const HotelReservation = (props) => {
 
  try{
    var { thisHotel } = props.location.state;
  } catch(err){
    console.log(err);
  }


  const goHome = () => {
    history.push('/hotel-list')
    window.location.reload(true);
  }
  
  if(thisHotel ){
    return (
      <Wrapper>
        <BackButton>Back</BackButton>
        <Title>
          You are going to make a reservation on {thisHotel.name}
        </Title>
      </Wrapper>
    )
  } else {
    return ( 
    <NoHotel>
      <p>No hotel chosen</p>
      <Button onClick={goHome}>Back to hotel list</Button>
    </NoHotel>
      )
  }
}

export default HotelReservation
