import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {pageLocation} from '../../../actions/sortingActions';


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
        <Link to='/' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}>Home</Link>
      </li>
      <li>
        <Link to='/contact' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}>Contact</Link>
      </li>
      <li>
        <Link to='/hotel-list' className="link" tabIndex = {tabulator} onClick={() => {setLocationToZero(); if(window.innerWidth <= 768){props.hideMobileNav(); }}}>Rooms</Link>
      </li>
      <li>
        <Link to='/guides' className="link" tabIndex = {tabulator} onClick={props.hideMobileNav}>Guides</Link>
      </li>
    </ul>
  )
}
const mapStateToProps = (state, ownProps) => ({
  sort: state.sort,
  props: ownProps
})
export default connect(mapStateToProps, {pageLocation})(NavLinks)
