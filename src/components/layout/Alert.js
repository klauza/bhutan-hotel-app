import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
// STYLES
const AlertBox = styled.div`
  z-index: 99;
  position: relative;
  &.alert{
    position: fixed;
    top: 50px; left: 50%; transform: translateX(-50%);
    width: 500px; height: 200px;
    background: grey; color: pink;
  }
`;
// styles-end

const Alert = ({alerts}) => {
  console.log(alerts);

  // looks at the alerts in context in the state
  // and if there is anything, it's going to loop through and output the <div>
  return (
    alerts.length > 0 && alerts.map(alert => (     
        <AlertBox key={alert.id} className={`alert alert-${alert.type}`}>
          {alert.msg}
        </AlertBox>
      ))
  );
};

const mapStateToProps = state => ({
  alerts: state.alerts
})
export default connect(mapStateToProps)(Alert)