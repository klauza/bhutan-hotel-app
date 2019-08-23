import React, {useEffect, useState} from 'react'

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
    <div className="show-footer" style={footerContainer} >
      <div style={{textAlign: "center"}}>
        <p style={alignVertical}>footer</p>
      </div>
    </div>
  )
}

const footerContainer = {
  "fontFamily": "Verdana",
  "height": "50px",
  "backgroundColor": "black",
  "color": "white",
  "marginTop": "auto",
  "opacity": "0"
}
const alignVertical = {
  "lineHeight": "50px"
  // "letterSpacing": "15px"
}

export default Footer
