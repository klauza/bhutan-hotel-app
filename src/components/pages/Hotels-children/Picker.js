import React, { useState } from 'react'
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import { setAlert } from '../../../actions/alertActions';
import history from '../../../history';
import {setCalendarDates, setApartment} from '../../../actions/reservationActions';
import styled from 'styled-components';

// STYLES
const ReservationDates = styled.div`
  display: flex; flex-direction: row;
  justify-content: space-between;

`;
const ReservationButton = styled.button`
  border: 1px solid black; border-radius: 4px;
  background: green; color: white; font-weight: 900;
  width: 100px; height: 40px;
  display: block; margin: 25px auto;
  &:hover{
    cursor: pointer; background: rgb(15, 150, 15);
    box-shadow: 0 0 5px 0px rgba(0,0,0,0.5);
  }
`;

// end-styles
const Picker = ({setCalendarDates, setApartment, setAlert, apartment}) => {


  const [date, setDate] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [price, setPrice] = useState(null);


  const onChange = date => {
    let Difference_In_Time = date[1].getTime() - date[0].getTime();
    let Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24) +1); 
    
    let toPay = Difference_In_Days * apartment.price;

    setDate(date);
    setShowDate(true);
    setShowReservation(true);
    setPrice(toPay)
  }

  // const validate = () => {
    // setShowDate(true);


    // show reservation button
    // setShowReservation(true);
  // }

  const reservation = () => {
    setCalendarDates([date[0].toLocaleDateString("en-GB"), date[1].toLocaleDateString("en-GB") ])
    setApartment(apartment);
    setAlert('Done! ...', 'green', 2000);
    setTimeout(()=> {
      history.push('/account');
    }, 400);

    setTimeout(()=>{
      setAlert('You can now additionally hire a guide or rent a car', 'green', 3000);
    }, 2000);

  }

  const reset = () => {
    // setShowDate(false);
    // setShowReservation(false);
  }
  
  return (
    <div>
      <div onClick={reset}>
        <Calendar 
        onChange={onChange} 
        selectRange={true} 
        value={date} 
        minDate ={new Date()}/>
      </div>
      {/* {date ? (
        <button onClick={validate}>Validate</button>
      ) : (null)
      } */}
      {showDate ? (
        <ReservationDates>
          <p><strong>From:</strong> {date[0].toLocaleDateString("en-GB")}</p>
          <p><strong>To:</strong> {date[1].toLocaleDateString("en-GB")}</p>
        </ReservationDates>
      ) : (null)}
      {showDate ? (
          <p><strong>Price: {price}<i className="fa fa-money" style={{marginLeft: "5px", fontSize: "1.15rem"}}></i></strong></p>
      ) : (null)}

      {showReservation ? (
        <ReservationButton onClick={reservation}>Make reservation</ReservationButton>
      ) : (null)
        
      }

    </div>
  )
  
}

export default connect(null, {setCalendarDates, setApartment, setAlert})(Picker)