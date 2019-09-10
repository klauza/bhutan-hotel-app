import React from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
// STYLES
const AlertBox = styled.div`
  opacity: 0;
  z-index: 201;
  position: relative;
  display: flex; flex-direction: row;
  align-items: center; justify-content: center;
  border: 1px solid black; border-radius: 3px;
  box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.75); 
  &.alert{
    position: fixed;
    bottom: 50px; left: 50%; transform: translateX(-50%) translateY(100px);
    width: auto; max-width: 500px; min-width: 250px; height: auto; min-height: 100px;
    /* background: #e06767; color: #e0e0e0; */
    i{ font-size: 2.5rem; margin-left: 10px;}
    span{ font-size: 1rem; margin: 10px; }
    
  }
  &.alert-red{ background: #e06767; color: #e0e0e0; font-weight: 700; }
  &.alert-green{ background: #52b80d; color: #fff; font-weight: 700; }
  &.alert-yellow{ background: #d8e640; color: #000; font-weight: 700; }

  &.alert-red, &.alert-green, &.alert-yellow{
    animation: animateAlert forwards 250ms;
    @keyframes animateAlert {
      100%{ transform: translateY(0) translateX(-50%); opacity: 1; }
    }
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