import React from 'react';
import styled from 'styled-components';
import mobileNavIcon from '../../../media/hamburger.png';
import NavLinks from './NavLinks';
import {Link} from 'react-router-dom';
import Logo from '../../../media/logo.png';

const MyDesktopNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;

  .nav-links{
    width: 50%;
    height: 100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: span 2;
    align-items: center;
    list-style: none;
    @media screen and (max-width: 768px){ display: none; }
  }
  .link{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.25vh;
    text-decoration: none;
    font-family: 'Livvic', sans-serif;
    font-weight: bold;
    &::after{
      content:'';
      height: 2px; width: 0px;
      background: white;
      display: block;
      transition: width 0.5s ease-in-out;
    }
    &:hover::after{
      transition: width 0.25s ease-in-out;
      width: 25%;
    }
  }
`;

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 50px;
  width: 50px;
  border: 0;
  display: none;
  margin-right: 10px;
  transition: transform 1s;
  transform: rotate( ${props => props.displayMobileNavbar ? ("90deg") : ("0")} );

  &:focus{
    outline: none;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px){
    display: grid;
    justify-self: end;
  }
`;
const NavbarBrand = styled.div`
  color: red;
  height: 100%;
  display: flex; flex-direction: row;
  align-self: center;
  justify-self: center;
  a{
    display: grid;
    grid-template-columns: auto auto;
    height: 56px;
    align-items: center;
    color: white;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    img{
      margin: 0 5px;
      width: auto;
      height: 45px;
      object-fit: cover;
      display: inline-block;
    }
  }
`;

const SocialLinks = styled.div`
align-self: center;
justify-self: center;
  a{
    font-size: 1.5em;
    color: white;
    margin-left: 15px;
    &:hover{
      color: lightgrey;
    }
    i:hover{cursor: pointer;}
  }
`;

const DesktopNav = (props) => {
  return (
    <div>
      <MyDesktopNavbar>
        <NavbarBrand><Link to="/"><img src={Logo} alt="" />Bhutanotel</Link></NavbarBrand>

        <SocialLinks>
          <a href="https://github.com/klauza/bhutanotel"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/michal-klauza-b22318186/"><i className="fa fa-linkedin-square"></i></a>{/* eslint-disable-next-line */}
          <a><i className="fa fa-facebook-official"></i></a>{/* eslint-disable-next-line */}
          <a><i className="fa fa-twitter-square"></i></a>
          <Link to="/contact"><i className="fa fa-map-marker"></i></Link>
        </SocialLinks>

        <NavLinks/>

        <MyMobileNavButton 
          displayMobileNavbar={props.displayMobileNavbar}
          onClick={props.toggleMobileNavbar}
        >
          <img src={mobileNavIcon} alt=""/>
        </MyMobileNavButton>
      </MyDesktopNavbar>
    </div>
  )
}

export default DesktopNav