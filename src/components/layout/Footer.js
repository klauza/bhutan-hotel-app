import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

// STYLES
const FooterWrap = styled.div`
  font-family: Verdana;
  height: 50px;
  background-color: black;
  color: white;
  margin-top: auto;
  opacity: 0;
`;
const FooterContent = styled.div`
  display: flex; flex-direction: row;

  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  span, i {
    line-height: 50px;
  }
  span{ display: flex; flex-direction: row; font-size: 0.95em;}

  i{
    margin: 0 10px;
    font-size: 1.55em;
    &:hover{
      color: grey;
      cursor: pointer;
    }
  }
`;
// styles-end

const Footer = () => {
  const [unblock, setUnblock] = useState(false);
  useEffect(()=>{
    if(unblock){
      document.querySelector(".show-footer").style.transitionDelay = "300ms";
      document.querySelector(".show-footer").style.transition = "all 500ms ease";
      document.querySelector(".show-footer").style.opacity = "1";
    } else {
      setUnblock(true);
    }
  
    
  },[unblock])
  
  return (
    <FooterWrap className="show-footer" >
      <FooterContent>

        <div>
          <span>© Klauza</span>
        </div>

        <div>
          <a href="https://www.google.com/"><i className="fa fa-linkedin-square"></i></a>
          <i className="fa fa-facebook-official"></i>
          
          <i className="fa fa-twitter-square"></i>
          <i className="fa fa-map-marker"></i>
        </div>

      </FooterContent>
    </FooterWrap>
  )
}


export default Footer
