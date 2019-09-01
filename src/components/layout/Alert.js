import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
// STYLES
const AlertBox = styled.div`
  z-index: 99;
  position: relative;
  display: flex; flex-direction: row;
  align-items: center; justify-content: center;
  border: 1px solid black; border-radius: 3px;
  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.75); 
  &.alert{
    position: fixed;
    top: 50px; left: 50%; transform: translateX(-50%);
    width: auto; max-width: 500px; min-width: 250px; height: auto; min-height: 100px;
    background: #e06767; color: #e0e0e0;
    i{ font-size: 2.5rem; margin-left: 10px;}
    span{ font-size: 1rem; margin: 10px; }
  }
`;
// styles-end

const Alert = ({alerts}) => {

  return (
    alerts.length > 0 && alerts.map(alert => (     
      <AlertBox key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fa fa-exclamation-triangle"></i> 
        <span>{alert.msg}</span>
      </AlertBox>
    ))
  );
  
};

const mapStateToProps = state => ({
  alerts: state.alerts
})
export default connect(mapStateToProps)(Alert)