import React, { useState } from 'react'
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import {setCalendarDates} from '../../../actions/calendarActions';

const Picker = ({setCalendarDates}) => {


  const [date, setDate] = useState(null);
  const [showDate, setShowDate] = useState(false);



  const onChange = date => {
    setDate(date);
  }

  const validation = () => {
    setShowDate(true);
    setCalendarDates([date[0].toLocaleDateString("en-GB"), date[1].toLocaleDateString("en-GB") ])
  }

  const reset = () => {
    setShowDate(false);
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
      {date ? (
        <button onClick={validation}>Validate</button>
      ) : (null)
      }
      {showDate ? (
        <div>
          <p>From: {date[0].toLocaleDateString("en-GB")}</p>
          <p>To: {date[1].toLocaleDateString("en-GB")}</p>
        </div>
      ) : (null)}
    </div>
  )
  
}

export default connect(null, {setCalendarDates})(Picker)