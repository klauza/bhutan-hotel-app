import React, { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import styled from 'styled-components';

const MyNavbar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  height: 200px;
  @media(max-width:768px){
    height: 165px;
  }
  background: black;
`;

const Nav = () =>  {

  const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false);

  useEffect(()=>{
    window.addEventListener("resize", checkAndAutoHideMobileNavMenu)

    return () => {
      window.removeEventListener("resize", checkAndAutoHideMobileNavMenu)
    }
    
  //eslint-disable-next-line
  },[displayMobileNavbar])




  const toggleMobileNavbar = () =>{
      setDisplayMobileNavbar(!displayMobileNavbar);
  }

  const hideMobileNav = () => {
    setDisplayMobileNavbar(false);
  }

  const checkAndAutoHideMobileNavMenu = () =>{ 
    const screenWidth = window.innerWidth;

    if(displayMobileNavbar && screenWidth > 768){
      setDisplayMobileNavbar(false);
    }
  }


    return (
      <MyNavbar>

        <DesktopNav 
        displayMobileNavbar={displayMobileNavbar}
        toggleMobileNavbar={toggleMobileNavbar} 
        />
        
        <MobileNav 
        hideMobileNav={hideMobileNav}
        displayMobileNavbar={displayMobileNavbar} 
        />

      </MyNavbar>
    )

}


export default Nav