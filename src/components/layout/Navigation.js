import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Wrapper = styled.div`
  width: 100%;
  background-color: grey;
`;
const Container = styled.div`
  width: 70%;
  height: 56px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  align-items: center;
`;
const NavbarBrand = styled.div`
  color: red;
  height: 100%;
    a{
      display: inline-block;
      line-height: 56px;
      color: white;
      text-decoration: none;
    }
`;
const Nav = styled.div`
  margin-left: auto;
  height: 100%;
  a{
    display: inline-block;
    line-height: 56px;
    padding: 0px 10px;
    color: black;
    text-decoration: none;
    &:hover{
      color: white;
    }
  }
`;

const Navigation = () => {
  return (
    
      <Wrapper>
       
          <Container>
            <NavbarBrand><Link to="/">Home</Link></NavbarBrand>
            {/* <NavbarToggle aria-controls="basic-navbar-bar" /> */}
            {/* <NavbarHamburger id="basic-navbar-nav"> */}
              <Nav>
                <Link to="/">Home </Link>
                <Link to="/hotel-list">Hotels </Link>
                <Link to="/contact">Contact</Link> 
                <Link to="/guides">Guides</Link> 
              </Nav>
            {/* </NavbarHamburger> */}
          </Container>

     
      </Wrapper>
    
  )
}

export default Navigation
