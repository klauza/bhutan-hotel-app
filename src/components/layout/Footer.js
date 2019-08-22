import React from 'react'

const Footer = () => {
  return (
    <div style={footerContainer} >
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
  "marginTop": "auto"
}
const alignVertical = {
  "lineHeight": "50px"
  // "letterSpacing": "15px"
}

export default Footer
