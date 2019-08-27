import React, { Component } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import styled from 'styled-components';

const MyNavbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  /* border: 2px solid red; */
  height: 200px;
  @media(max-width:768px){
    height: 165px;
  }
  background: black;
`;

export default class Nav extends Component {

  state = {
    displayMobileNavbar: false
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.checkAndAutoHideMobileNavMenu)
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkAndAutoHideMobileNavMenu)
  }
  

  toggleMobileNavbar = () =>{
    this.setState({
      displayMobileNavbar: !this.state.displayMobileNavbar
    })
  }

  hideMobileNav = () => {
      this.setState({
        displayMobileNavbar: false
      })
  }

  checkAndAutoHideMobileNavMenu = () =>{ 
    const screenWidth = window.innerWidth;

    if(this.state.displayMobileNavbar && screenWidth > 768){
      this.setState({
        displayMobileNavbar: false
      })
    }
  }

  render() {
    return (
      <MyNavbar>

        <DesktopNav 
        displayMobileNavbar={this.state.displayMobileNavbar}
        toggleMobileNavbar={this.toggleMobileNavbar} 
        />
        
        <MobileNav 
        hideMobileNav={this.hideMobileNav}
        displayMobileNavbar={this.state.displayMobileNavbar} 
        />

      </MyNavbar>
    )
  }
}
