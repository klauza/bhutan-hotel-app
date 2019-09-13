import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';

const MyMobileNavbar = styled.nav`
  width: 50vw; height: 100vh;
  position: fixed; top: 0; right: 0;
  background: grey;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  box-shadow: -1px 2px 4px 1px rgba(79,79,79,1);
  transition: transform 650ms;
  transform: translateX( ${ props => props.displayMobileNavbar ? ("0") : ("calc(100% + 15px)")} );
  z-index: 200;

  .nav-links{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  height: 100%; width: 100%;


  .link{
    text-align: center;
    display: flex; flex-direction: column;
    justify-items: center; align-items: center;
    text-align: center;
    width: 45vw; line-height: 60px;
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    font-family: 'Livvic', sans-serif;
    font-weight: 700;
    &:hover{
      background: lightgrey;
    }
    img{
      margin-top: 10px;
      width: 40px; height: 40px;
      /* display: none; */
    }
    div{
      display: none;
    }
  }
  }
`;
const MobileNav = (props) => {
  return (
    <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar} >
      <NavLinks isMobileLink = { true } hideMobileNav={props.hideMobileNav} />
    </MyMobileNavbar>
  )
}

export default MobileNav
