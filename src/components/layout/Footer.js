import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
  height: 100%;
  div:nth-child(1){
    display: flex; flex-direction: row; align-items: center;
    &::after{
      content:'';
      display: block;
      background: rgba(255,255,255,0.5);
      width: 1px;
      height: 75%;
      margin-left: 20px;
    }
  }
  div:nth-child(2){
    display: flex; flex-direction: row; align-items: center;
    &::before{
      content: '';
      display: block;
      background: rgba(255,255,255,0.5);
      width: 1px;
      height: 75%;
      margin-right: 20px;
    }
  }
  div > a{
    line-height: 50px;
    display: inline-block;

    text-decoration: none;
    color: white;
    margin: 0 10px;
    font-size: 1.55em;
    &:hover{
      color: grey;
      cursor: pointer;
    }
  } 
  div:nth-child(2) a:nth-child(4){
    margin-right: 30px;
  }
`;
// styles-end

const Footer = () => {
  const [unlock, setUnlock] = useState(false);
  useEffect(()=>{
    if(unlock){
      document.querySelector(".show-footer").style.transitionDelay = "300ms";
      document.querySelector(".show-footer").style.transition = "all 500ms ease";
      document.querySelector(".show-footer").style.opacity = "1";
    } else {
      setUnlock(true);
    }
  
    return () => {
      setUnlock(false);
    }
  },[unlock])
  
  return (
    <FooterWrap className="show-footer" >
      <FooterContent>

        <div>
          <a href="https://github.com/klauza"><i className="fa fa-github"></i></a>
          <span>© Klauza</span>
        </div>

        <div>
          <a href="https://www.linkedin.com"><i className="fa fa-linkedin-square"></i></a>
          <a href="https://www.facebook.com/"><i className="fa fa-facebook-official"></i></a>
          <a href="https://twitter.com/"><i className="fa fa-twitter-square"></i></a>
          <Link to="/contact"><i className="fa fa-map-marker"></i></Link>
        </div>

      </FooterContent>
    </FooterWrap>
  )
}


export default Footer
