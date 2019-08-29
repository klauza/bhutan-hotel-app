import React from 'react';
import {connect} from 'react-redux';


const Account = ({ calendar: {dates} }) => {
  
  if(dates !== null){
    return (
      
      <div>
        {dates[0].toLocaleDateString()}<br/>
        {dates[1].toLocaleDateString()}
      </div>
      
    )
  } else {
    return (
      <div>
        nothing was reserved
      </div>
    )
  }
}
const mapStateToProps = state => ({
  calendar: state.calendar
})
export default connect(mapStateToProps)(Account)
