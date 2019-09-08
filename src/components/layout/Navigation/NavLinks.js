import React from 'react';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';
import {pageLocation} from '../../../actions/sortingActions';
import {reservationCalendar, homeImg, apartmentImg, guideImg, contactImg} from '../../../media/index.js';


const NavLinks = ({sort: {pageLocY}, reservation: {dates}, pageLocation, props}) => {

  let tabulator
  if (props.isMobileLink) {
    tabulator = "-1";
  }

  const setLocationToZero = () => {
    
    if(pageLocY === 0) return
    pageLocation(0);
  }

  return (
    <ul className="nav-links">
      <li>
        <NavLink exact activeClassName="active" to='/' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={homeImg} alt=""/><span>Home</span></NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to='/contact' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={contactImg} alt=""/><span>Contact</span></NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to='/apartment-list' className="link" tabIndex = {tabulator} onClick={() => {setLocationToZero(); if(window.innerWidth <= 768){props.hideMobileNav(); }}}><img src={apartmentImg} alt=""/><span>Apartments</span></NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to='/guides' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={guideImg} alt=""/><span>Guides</span></NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to='/account' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={reservationCalendar} alt=""/>{dates !== null && <div style={{color: "lightgreen"}}>!</div> } <span>Reservations</span></NavLink>
      </li>
    </ul>
  )
}
const mapStateToProps = (state, ownProps) => ({
  sort: state.sort,
  reservation: state.reservation,
  props: ownProps
})
export default connect(mapStateToProps, {pageLocation})(NavLinks)
