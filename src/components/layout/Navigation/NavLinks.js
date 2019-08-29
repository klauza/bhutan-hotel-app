import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {pageLocation} from '../../../actions/sortingActions';
import {reservationCalendar, homeImg, apartmentImg, guideImg, contactImg} from '../../../media/index.js';


const NavLinks = ({sort: {pageLocY}, pageLocation, props}) => {

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
        <Link to='/' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={homeImg} alt=""/><span>Home</span></Link>
      </li>
      <li>
        <Link to='/contact' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={contactImg} alt=""/><span>Contact</span></Link>
      </li>
      <li>
        <Link to='/apartment-list' className="link" tabIndex = {tabulator} onClick={() => {setLocationToZero(); if(window.innerWidth <= 768){props.hideMobileNav(); }}}><img src={apartmentImg} alt=""/><span>Apartments</span></Link>
      </li>
      <li>
        <Link to='/guides' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={guideImg} alt=""/><span>Guides</span></Link>
      </li>
      <li>
        <Link to='/account' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}><img src={reservationCalendar} alt=""/> <span>Reservations</span></Link>
      </li>
    </ul>
  )
}
const mapStateToProps = (state, ownProps) => ({
  sort: state.sort,
  props: ownProps
})
export default connect(mapStateToProps, {pageLocation})(NavLinks)
