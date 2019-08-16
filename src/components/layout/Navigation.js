import React from 'react';
import styled from 'styled-components';
import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap'

const Styles = styled.div`
  .navbar{
    background-color: grey;
  }
  .nav-item{
    color: #bbb;
    margin: 0 10px;
    &:hover{
      cursor: pointer;
      color: white;
    }
  }
`;

const Navigation = () => {
  return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-bar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/"><Nav.Item>Home </Nav.Item></LinkContainer>
              <LinkContainer to="/hotel-list"><Nav.Item>Hotels </Nav.Item></LinkContainer>
              <LinkContainer to="/about"><Nav.Item>About</Nav.Item></LinkContainer> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
  )
}

export default Navigation
