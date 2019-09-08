import React from 'react';
import styled from 'styled-components';
import {Wrapper, BackButton} from '../../layout/Elements';
import Picker from './Picker';
import history from '../../../history';



// STYLES
const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 50px;
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
const DatePicker = styled.div`
  display: flex;
  justify-content: center;
`;
// end-styles


const HotelReservation = (props) => {
 
  try{
    var { thisHotel } = props.location.state;
  } catch(err){
    console.log(err);
  }


  const goHome = () => {
    history.push('/apartment-list')
  }
  
  if(thisHotel ){
    return (
      <Wrapper>
        <BackButton>Back</BackButton>
        <Title>
          You are going to make a reservation on {thisHotel.name}
        </Title>
        <DatePicker>
          <Picker apartment={thisHotel} />
        </DatePicker>
      </Wrapper>
    )
  } else {
    return ( 
    <NoHotel>
      <p>No apartment was chosen</p>
      <Button onClick={goHome}>Back to apartment list</Button>
    </NoHotel>
      )
  }
}

export default HotelReservation
