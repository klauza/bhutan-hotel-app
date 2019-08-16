import React from 'react'

const Footer = () => {
  return (
    <div style={footerContainer} >
      <div className="d-flex justify-content-center h-100">
        <p style={alignVertical}>FOOTER</p>
      </div>
    </div>
  )
}

const footerContainer = {
  "height": "50px",
  "backgroundColor": "black",
  "color": "white",
  "marginTop": "auto"
}
const alignVertical = {
  "lineHeight": "50px",
  "letterSpacing": "15px"
}

export default Footer
